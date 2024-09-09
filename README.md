# @4tune/js-and-web-runtime

Provides implementation of the javascript runtime of the fortune project builder project.

The following methods are supported:

### loadResource(url)

Loads the project resource located at `url`.

### (loadResourceDynamic)

### loadProjectPackageJSON()

Returns the project's package.json as a javascript object.

### loadFortuneConfiguration()

Returns the project's fortune.config.mjs as a javascript object.

### createDefaultContext()