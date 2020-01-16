# Weave

> Prototyping made easy.


## Features

- [Twig](http://twig.sensiolabs.org/) - Create pages/templates/partials
- [CSS](http://sass-lang.com/) - Preprocess CSS
    - [TailwindCSS](https://tailwindcss.com)
    - [PostCSS Plugins](https://github.com/postcss/postcss)
        - [postcss-import](https://github.com/postcss/postcss-import) - Transforms `@import` rules by inlining content
        - [postcss-hexrgba](https://github.com/seaneking/postcss-hexrgba) - Adds shorthand hex methods to rgba() values
        - [postcss-nested](https://github.com/postcss/postcss-nested) - Unwraps nested rules like how Sass does it
        - [postcss-calc](https://github.com/postcss/postcss-calc) - Lets you reduce `calc()` references whenever it's possible
        - [postcss-purgecss](https://github.com/FullHuman/postcss-purgecss) - Remove unused CSS
        - [postcss-flexibility](https://github.com/7rulnik/postcss-flexibility) - Flexbox polyfills
        - [pixrem](https://github.com/robwierzbowski/node-pixrem) - Generate pixel fallbacks for rem units
        - [cssnano](https://cssnano.co/) - Modern CSS compression
        - [autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefix CSS
- [SVG Symbols](https://github.com/svgstore/svgstore-cli) - Combine SVG files into symbols
    - [SVGO](https://github.com/svg/svgo) - Cleanup and minify SVG files
- [Browsersync](https://www.browsersync.io/) - Synchronised browser testing


## Getting Started

1. __Clone the project__

    ```
    $ git clone git@github.com:kjbrum/weave.git <project-name>
    ```

1. __Install the dependencies__

    ```
    $ yarn install
    ```

1. __Development__

    ```
    $ yarn dev
    ```

1. __Staging/Production__

    ```
    $ yarn build
    ```


## Development Notes

__New Pages__

- New site pages should be placed in the `src/pages` folder with the a `.twig` extension.
- These Twig files will be compiled to `dist/<path/to/file.html>` and will be accessible as static pages.

__Page Data__

- The `src/data/default.json` file can be used for supplying data to all pages.
- Each page in the `src/pages` folder can have an accompanying JSON data file.
- This data file will be placed in the `src/data` folder with the same hierarchy and name as the page.
    `src/pages/news/_entry.twig` ==> `src/data/news/_entry.json`

__Include and Extends__

- Twig includes will need to be passed the relative path to the partial you would like to include.
    ```
    {% extends '../partials/base/_layout.twig' %}

    {% block content %}
        {% include 'path/to/partial.twig' %}
    {% endblock %}
    ```


## License

Copyright &copy; [Kyle Brumm](http://kylebrumm.com). Weave is free to use on whatever and may be redistributed under the terms specified in the [license](LICENSE.md).
