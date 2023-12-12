# OPENRNDR JavaScript template project

This is a template project for creating [OPENRNDR](https://openrndr.org/) programs specifically with Kotlin/JS.
For making a standard Kotlin/JVM-based application,
see [openrndr-template](https://github.com/openrndr/openrndr-template).

To get started, run the `browserDevelopmentRun --continuous` Gradle task. This will start a local development server 
with hot-reloading. Any changes you make in `/src/main/kotlin` will be reflected in the browser.


To host your OPENRNDR sketch on a GitHub Pages site, you would typically compile your Kotlin/JS project and then push the generated static files to a GitHub repository. However, the provided code context does not include any build scripts or configuration files for compiling the project to JavaScript or for deploying to GitHub Pages.

Here's a general step-by-step guide on how you can do it:

Compile your Kotlin/JS project: You need to compile your Kotlin/JS project into JavaScript files. This is usually done using the browserProductionWebpack Gradle task. The output is typically a set of .js and .html files.

Create a GitHub repository: If you haven't done so already, create a new GitHub repository.

Push your code to the repository: Push your entire project, including the compiled JavaScript files, to the GitHub repository.

Setup GitHub Pages: In your repository settings on GitHub, go to the "GitHub Pages" section and select the branch you want to use for GitHub Pages (usually main or gh-pages).

Access your site: Your site should now be accessible at https://<your-github-username>.github.io/<repository-name>/.

Please note that the exact steps may vary depending on your project's specific setup. If you need more specific instructions, please provide more information about your project's structure and configuration.