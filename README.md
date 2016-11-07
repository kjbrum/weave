# SBX Proto

> Starter project for prototyping.


## Features

- [Browsersync](https://www.browsersync.io/) - Synchronised browser testing
- [Sass(SCSS)](http://sass-lang.com/) - CSS preprocessing
    - [Node-sass](https://github.com/sass/node-sass) - Compiling and minifying
    - [Autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefixing
    - [Critical CSS](https://github.com/addyosmani/critical) - Extract critical-path CSS
- [Imagemin](https://github.com/imagemin/imagemin) - Optimize images (jpg, jpeg, gif, png)
- [Uglify.js](https://github.com/mishoo/UglifyJS2) - Minifying JavaScript
- [Twig](http://twig.sensiolabs.org/) - Creating templates/partials


## Getting Started

1. __Clone the project__

    ```
    $ git clone git@github.com:kjbrum/sbx-proto.git <project-name>
    ```

1. __Install the dependencies__

    ```
    $ npm install
    ```

1. __Development__

    ```
    $ npm run dev
    ```

1. __Staging/Production__

    ```
    $ npm run build
    ```


## Development Notes

- Any files in the `src/pages` folder should be new site pages. They will be compiled to `dist/<filename>.html` to be accessible as static pages.
- Twig `includes` will need to be passed the relative path to the partial.


## To-do

- Create a "migrate.js" script for converting the prototype into a Craft project
- Integrate `scss/components` that have been used in past projects for reusability


## License

Copyright &copy; [Kyle Brumm](http://kylebrumm.com). SBX Proto is free to use on whatever and may be redistributed under the terms specified in the [license](LICENSE.md).
