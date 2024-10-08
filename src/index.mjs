import parseResourceURL from "./parseResourceURL.mjs"
import createTemporaryResource from "@anio-js-foundation/create-temporary-resource"

function loadResourceAsURL(map, type, path, data) {
	const full_path = `${type}://${path}`

	if (map.has(full_path)) {
		return map.get(full_path)
	}

	const {location} = createTemporaryResource(data, {
		type: type === "esmodule" ? "text/javascript" : "text/plain"
	})

	map.set(full_path, location)

	return location
}

export function initializeRuntime(
	runtime_init_data, project_resources = null
) {
	const runtime = {
		resources: project_resources,
		resources_url: new Map(),

		getRuntimeVersion() {
			return runtime_init_data.runtime_version
		},

		loadProjectPackageJSON() {
			return JSON.parse(JSON.stringify(runtime_init_data.package_json))
		},

		loadFortuneConfiguration() {
			return JSON.parse(JSON.stringify(runtime_init_data.fortune_config))
		},

		loadResourceDynamic(url, as_url = false) {
			if (url === null) return

			if (runtime.resources === null) {
				throw new Error(
					`Runtime resources have not been loaded yet.\n` +
					`In order to load them import {loadResource} from "@4tune/realm-js" and call loadResource(null)` +
					` to load resources.`
				)
			}

			const {type, path} = parseResourceURL(url)

			for (const resource of runtime.resources) {
				if (resource.type !== type) continue
				if (resource.path !== path) continue

				if (!as_url) return resource.data

				return loadResourceAsURL(
					runtime.resources_url,
					type,
					path,
					resource.data
				)
			}

			throw new Error(`Unable to locate resource ${type}://${path}.`)
		},

		createDefaultContext() {
			return {}
		}
	}

	return runtime
}
