import resolveNodePlugin from "@rollup/plugin-node-resolve"

export default {
	input: "./src/index.mjs",

	output: {
		file: "./dist/build.mjs",
		format: "es"
	},

	plugins: [resolveNodePlugin()]
}
