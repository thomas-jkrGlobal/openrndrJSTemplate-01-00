let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/thomas.mcelmeel/IdeaProjects/jkr/openrndrJSTemplate-01-00/build/js/packages/openrndr-js-template/kotlin/openrndr-js-template.js"]
};

config.output = {
    path: "/Users/thomas.mcelmeel/IdeaProjects/jkr/openrndrJSTemplate-01-00/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "openrndr-program.js"
            : "openrndr-program-[name].js";
    },
    library: "openrndr-js-template",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/thomas.mcelmeel/IdeaProjects/jkr/openrndrJSTemplate-01-00/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// KotlinWebpackCssRule[css]
;(function(config) {
            const use = [{
    loader: 'style-loader',
    options: {}
},{
    loader: 'css-loader',
    options: {}
}]
config.module.rules.push({
    test: /\.css$/,
    use: use,
    exclude: undefined,
    include: undefined,
})
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/thomas.mcelmeel/IdeaProjects/jkr/openrndrJSTemplate-01-00/build/reports/webpack/openrndr-js-template/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
