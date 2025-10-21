
//!---------------------------------------------------------------------------

//?Module 13: Top Industry Best Practices for Scalable Frontend Development

//!---------------------------------------------------------------------------

//?In This Module
//- webpack
//- git Command
//- ts
//- ci - cd pipelines
//- docker
//- redux


//!185-Lec-1-Mastering Webpack: The Power of Module Bundling for Real-World Web Apps
//- In this lecture, we've explored what Webpack is and how it's used in real-world web applications.
//- Essentially, Webpack is a module bundler that takes all your JavaScript files and bundles them into a single file.
//- This process helps optimize performance and is especially useful for large-scale applications in major companies.


// You can understand webpack with this image => Source => https://webpack.js.org/
//- so webpack basically turns your many files into 1 or you can have all control and make a configuration if you dont want a one file in that single file you can make seprate file

//- example i have 3 js files have became 1 but i have to seprate my moment js library in different part which is use for date and time or u have to seprate your 3d ui threejs in different style the u can seprate

// we have other bunmdlers to like rollup and parcel but they have all configuration built in......we can thave all access within our hand

//!Notes By PPT
/*

? Webpack Presentation 

? WHAT IS WEBPACK ?

?Webpack is a module bundler.**
- Webpack is a static module bundler for modern JavaScript applications.When webpack processes your application, it internally builds a Dependency Graph from one or more entry points and then combines every module your project needs into one or more bundles.
- The goal of webpack is to unify all different sources and module types in a way that's possible to import everything in your JavaScript code, and finally produce a shippable output.

?WHY WEBPACK IS NECESSARY
- Webpack simplifies the build process for React applications.It allows developers to manage dependencies and bundle files with ease.Webpack can also optimize code and assets for production, reducing the file size of the application and improving performance.

? WEBPACK BUNDLE PROCESS Diagram:

    ```
┌──────────┐
│ Webpack  │────────┐
└──────────┘        │
                    │
        ┌───────────┴────────────────────────────┐
        │                                        │
        │  ┌─────────────┐                      │
        │  │ entry point │                      │
        │  │  (index.js) │                      │
        │  └──────┬──────┘                      │
        │         │                              │
        │    ┌────┴────┐                        │
        │    │         │                        │
        │ ┌──▼───┐  ┌──▼───┐                   │
        │ │/home │  │/login│─────► modules     │
        │ └──────┘  └──────┘─────► modules     │
        │                    ─────► modules     │
        └────────────────────────────────────────┘
        │
        ▼
┌──────────────┐         ┌──────────┐
│  bundle.js   │────────►│ browser  │
│              │  downloaded on request
└──────────────┘         └──────────┘

- Webpack will crawl all your JavaScript modules and dependencies and merge them as one bundle.js file for browsers to download

? PROBLEMS SOLVED BY WEBPACK

- Webpack can understand the relationships between multiple files and "resolve" them in a process called dependency resolution.
- If one depends on another, we call the latter a dependency of the former.
- The process of dependency resolution involves traversing all the files in your code starting from the entry point.The process is recursive or in other words self - repeating.Dependencies of dependencies are followed until they are all mapped out

- Webpack helps in managing the size of the application.

- Webpack also helps in optimizing the performance

    ** Diagram:**
        ```
┌─────────────┐              ┌──────────┐         ┌─────────────┐
│   modules   │              │          │         │  .js   .js  │
│    with     │────────────► │ webpack  │────────►│             │
│dependencies │              │  MODULE  │         │ .png  .css  │
└─────────────┘              │ BUNDLER  │         └─────────────┘
                             └──────────┘              static
                                                       assets
```

---

? BASIC FILE STRUCTURE

1. ** dist ** — distribution folder, which will keep all the compiled code under build folder

2. ** bundle.js ** — usually common name for the file which will keep your compiled js and css / sass files in it

3. ** index.html ** — file where your html structure will be placed.Please note, for index.html in order to read your bundle / js you need to put next code on the < head > tag:
`<script type="text/javascript" src="bundle.js"></script>`

4. ** node_modules ** — folder where all the necessary plugin would be placed.

5. ** src ** — or source folder, where you are sorting files which you are working on.

6. ** js **— here would be placed your javascript files which you wrote(for example main.js), or extra libraries which you need to include in order your website to work.

7. ** scss ** — folder where you need to keep your styling files

8. ** app.js ** — file where you will list all the files needed to be compiled in your bundle.js

9. ** index.html ** — main / starting page of your website

10. ** package.json ** — file which will keep notes of all installed libraries and also commands for your terminal(for example "npm run start" runs from terminal but in current file you will see something like "start": "your command here")

11. ** webpack.config.js ** — file where you can configure your localhost and the way your code from folder "src" would be compiled into folder "build"


? DEPENDENCY GRAPH

- Webpack uses dependency graph to resolve modules which are dependent on one another and build the modules first which are required in some other modules.

** bootstrap.main.ts ** is used as the entry point to build the dependency graph.Other files are all required in the main file.

** Diagram:**
    ```
                    ┌──────────────────┐
                    │ bootstrap.main.ts│  Entry Point
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ app.component.js │
                    └────────┬─────────┘
                             │
                ┌────────────┴──────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼──────────────┐
        │ external.lib.js│         │ some.component.ts    │
        └───────┬────────┘         └───────┬──────────────┘
                │                           │
        ┌───────▼──────────┐       ┌───────▼──────────────┐
        │ external.lib.dep.js│     │ some.component.sass  │
        └──────────────────┘       └──────────────────────┘
                │
        ┌───────▼──────────┐
        │external.lib.dep.css│
        └──────────────────┘
```

---

## Image 6: CODE SPLITTING WITH OPTIMIZATION.SPLITCHUNKS

Consider a JavaScript application using ** Moment.js **, the popular JS library for times and dates.

The whole library is bundled in the main entry point of our app.Not good.With optimization.splitChunks we can move out moment.js from the main bundle.

The required configuration is shown.

** Code Example:**
    ```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    // omitted for brevity
  },
  
  optimization: {
    splitChunks: { chunks: "all" }
  },
  // omitted for brevity
};
```

*/

//!186-Lec-2-Building with Webpack from Scratch: Loaders, Plugins, and Build Setup.

//?In Lecture
//- We covered how loaders and plugins work and created a complete Webpack configuration file from scratch.
//- You'll see step-by-step how to build your project into a single bundled file,
//- with a full practical demo to help understand Everything in detail.

//?Other Bundler
//- webpack start from scratch
//- vite interally use roolup which is also one bundler ,
//- parcel also a bundler
//- but this 2 have do it configuration within self
//- where webpacl we have to start from scratch

//?Webpack Main Work
//- webpack help to make a build.and this build is going in production
//- so webpack make sure the build which became its lighter at most

//?Setup of webpack

//?1- make a webpack folder go into webpack folder

//?2- npm init -y => -y for not asking package.json configuration like name ,version....

//?3- npm install webpack webpack-cli --save-dev
// => --save-dev for development we dont build as of now for production so dev-depedency
//- it show devde-pdency of webpack and webpack-cli and also seen packag-lock.json and node-modules

//?4 make file name - webpack.config.js
//? CODE- webpack.config.js
/*
module.exports = {
    //given direction
    //which thing use
    //what is entry point
}
*/
//- its one time configuration then chnage only when you have to change something

//?5.make folder named app or src -> make file in the folder index.js
//? CODE- webpack.config.js
/*
module.exports = {
entry:"./app/index.js"
}
*/
//- entry point defiend
//- here we write hwtaever js file webpack as per configuration we write it gives one file


//?6.webpack dont understand js or modern syntax so when webpack understand we have to give loaders
//so for loaders basically we have to configure first
/*
module.exports = {
    rules: [
        //loaders define here
    ]
}
*/

//?Example-1-svg-inlind-loader => its use for the useasge of loader
module.exports = {
    rules: [
        
    ]
}
