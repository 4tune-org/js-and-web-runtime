/**
 * @brief Get runtime version number
 */
export function getRuntimeVersion() : string

type ResourceReturnType = string | Uint8Array

interface LoadResourceFunction {
	/**
	 * @brief Synchronously load a resource
	 * @description
	 * Synchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * The resources content.
	 */
	(url : string) : ResourceReturnType

	/**
	 * @brief Asynchronously load a resource
	 * @description
	 * Asynchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * URL that points to the loaded resource.
	 */
	asURL(url : string) : Promise<string>
}

export const loadResource : LoadResourceFunction

interface LoadStaticResourceFunction {
	/**
	 * @brief Synchronously load a resource
	 * @description
	 * Synchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * The resources content.
	 */
	(url : string) : ResourceReturnType

	/**
	 * @brief Asynchronously load a resource
	 * @description
	 * Asynchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * URL that points to the loaded resource.
	 */
	asURL(url : string) : Promise<string>
}

export const loadStaticResource : LoadStaticResourceFunction

/**
 * @brief Dynamically load a resource
 */
export function loadResourceDynamic(url : string) : ResourceReturnType

/**
 * @brief Synchronously load the project's package.json
 */
export function loadProjectPackageJSON() : object

/**
 * @brief Synchronously load the project's fortune configuration
 */
export function loadFortuneConfiguration() : object

export function createDefaultContext() : object
