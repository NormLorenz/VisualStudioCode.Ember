## Creating an Ember application using Visual Studio Code
 
This is a simple Ember.js application with three routes to demonstrate the Visual Studio Code
development environment. All Ember application code exists in the public/app folder and uses
gulp to generate two files (templates.js and app.js) located in the public/build folder. The
jade files (index.jade and layout.jade) are just placeholders for rendering the Ember SPA
application.
 
The application is built using Ember version 1.11.1.849fbe2c matching pair of javascript code
and complier.
 
## Based Upon the Following Articles
- [Visual Studio Code](https://code.visualstudio.com/)
- [Creating a Ember.js app with Node.js, Express.js, Jade.js and Gulp.js](http://jb.demonte.fr/blog/nodejs-app-with-expressjs-emberjs-stylus-jade-handlebars-jquery-gulpjs/)
- [Visual Studio Code - Developing Node Applications](https://code.visualstudio.com/Docs/nodejs)
 
## Compiling Templates using Gulp
- [Ember Documentation](http://emberjs.com/blog/2015/02/05/compiling-templates-in-1-10-0.html)
- [gulp-htmlbars-compiler](https://www.npmjs.com/package/gulp-htmlbars-compiler)
 
## GitHub
- [.gitignore](https://help.github.com/articles/ignoring-files/)
- [Excluding node_modules](https://docs.npmjs.com/misc/faq#should-i-check-my-node-modules-folder-into-git)
 
## Installation
- Prerequisites
	- [Install Visual Studio Code](https://code.visualstudio.com/)
	- [Install Node.js](https://nodejs.org/)
 
- Download Visual Studio Code for Ember package at GitHub
	- [Download package](https://github.com/NormLorenz/VisualStudioCode.Ember)
               
- Restore node_modules packages
 
```sh
		$ cd [working folder]
		$ npm install
```           
- Launch Visual Studio Code
- Select the working folder
- Hit F5
- Type localhost:3000 in your browser address bar
 