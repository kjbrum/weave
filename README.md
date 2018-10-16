# Weave

> Prototyping made easy.


## Features

- [Twig](http://twig.sensiolabs.org/) - Templating for layouts and partials
- [Browserify/Babelify](http://browserify.org/) - JavaScript bundling
- [Sass(SCSS)](http://sass-lang.com/) - CSS preprocessing
    - [Node-sass](https://github.com/sass/node-sass) - Compiling and minifying Sass
    - [Autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefixing CSS
- [Browsersync](https://www.browsersync.io/) - Synchronised browser testing


## Getting Started

1. __Clone the project__

    ```
    $ git clone git@github.com:kjbrum/weave.git <project-name>
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
    {% extends '../partials/general/_layout.twig' %}

    {% block content %}
        {% include 'path/to/partial.twig' %}
    {% endblock %}
    ```


## License

Copyright &copy; [Kyle Brumm](http://kylebrumm.com). Weave is free to use on whatever and may be redistributed under the terms specified in the [license](LICENSE.md).
