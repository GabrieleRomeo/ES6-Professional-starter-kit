Professional ES6 Starter Kit
=====================

[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()



A complete **ES6 Starter Kit** with full development & build workflow for your next **vanilla Javascript** project.

The main goal of this project is to speed up your development process and maintain a professional level workflow.



**What does it include**?

* Development / Build / Linting tasks
* [Webpack 2.0](https://webpack.github.io/) module bundler
* [Babel](https://babeljs.io/) transpiler
* Code Quality
  * [Eslint](http://eslint.org/) / [Babel-eslint](https://github.com/babel/babel-eslint) / [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  * [Prettier](https://github.com/prettier/prettier) (code formatting)
  * [Pre-commit](https://github.com/observing/pre-commit) (Requires eslint checks to be passed before commits)
  * [Jest](http://facebook.github.io/jest/) (Testing and Code Coverage)
* Documentation
  * [JSDoc 3](http://usejsdoc.org/) Javascript documentation
  * [Doxdox](https://doxdox.org/) 
* Software Release
  * [Semantic-release](https://github.com/semantic-release/semantic-release)



### Install

```shell
git clone https://github.com/GabrieleRomeo/ES6-Professional-starter-kit.git
cd ES6-Professional-starter-kit
```



Update the project's information inside the `package.json` 



After that, you can start fresh with `semantic-release` by invoking the `setup` task, like this:

```shell
yarn setup
// or
npm run setp
```

 Otherwise you can run the dependencies installation manually:

```shell
yarn
// or
npm install
```



### Run in development mode

```shell
yarn dev
// or
npm run dev
```

Goto [http://localhost:8080](http://localhost:8080)



### Build

The `build` directory will contain the `build.js` and `build.min.js` files. The former will be a production version of your software that you will ship and the latter will be a development version instead.

If you want to request your library directly into the browser, check out the comments inside the  `webpack.config.js` file to see how you can configure the Webpack's output to achieve different results. 

For more information about the available features / commands, please visit the [following webpage](https://gabrieleromeo.github.io/ES6-Professional-starter-kit/)



Copyright 2017 © Gabriele Romeo

> ```
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
> ```


