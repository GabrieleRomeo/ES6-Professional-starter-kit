Professional ES6 Starter Kit
=====================

[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]() [![Build Status](https://travis-ci.org/GabrieleRomeo/ES6-Professional-starter-kit.svg?branch=master)](https://travis-ci.org/GabrieleRomeo/ES6-Professional-starter-kit)

This repository provides a full development & build workflow for your next **vanilla ES6 Javascript** project.

The primary goal of this project is to allow a rapid kick-start your development process by trying to avoid the tedious task of installing tons of libraries along with the following configurations. Moreover, it helps to maintain a professional workflow.



The default assets under the `src` , `public` folders are to be considered as examples file.



**What does it include**?

* Development / Build tasks
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
    * [semantic-release-tamia](https://github.com/tamiadev/semantic-release-tamia)




### Install

```shell
git clone https://github.com/GabrieleRomeo/ES6-Professional-starter-kit.git
cd ES6-Professional-starter-kit
```



Update the project's information inside the `package.json` file and, if necessary, [clear out](https://gist.github.com/stephenhardy/5470814) the git history of the original repo.



After that, you can start fresh with `semantic-release` by invoking the `setup` task, like this:



Run `yarn setup` or `npm run setup` 



You may also run dependencies installation manually with:

Run `yarn` or `npm install` 





### Build

By default the `src/index.js` file acts as a single point of access for the build system.

The `build` directory will contain the `build.js` and `build.min.js` files. The former will be a production version of your software that you will ship and the latter will be a development version instead.



Check out the comments inside the  `webpack.config.js` file If you want to use your library directly into the browser.





### Development Environment

Run `yarn dev` or `npm run dev` 

 It will open the `index.html` page within your favourite browser. 



### Documentation

JSDoc allows to use a markdown file as the home of your API. By default, the system uses the `home_manifest.md` file under the `__jsDoc__` dir as to generate the example.



### Semantic Release

To release a new version, you'll need to create a commit with `Changelog` type. 

To generate changelog draft run `npm run changelog:preview`.

To commit changelog run `npm run changelog:commit`.

More info [here](https://github.com/tamiadev/semantic-release-tamia)



----



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


