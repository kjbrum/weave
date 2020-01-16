// tailwind.config.js
// const defaultTheme = require('tailwindcss/defaultTheme')

// const _ = require('lodash')

const em = px => `${px / 16}em`
const rem = px => ({ [px]: `${px / 16}rem` })
const px = num => ({ [num]: `${num}px` })

const breakpoints = {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
}

module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        colors: {
            transparent: 'transparent',

            black: '#000000',
            white: '#ffffff',

            gray: {
                100: '#f7f7f7',
                200: '#f3f3f3',
                300: '#e5e5e5',
                400: '#cccecf',
                500: '#abacad',
                600: '#6e6f6f',
                900: '#333333',
            },
        },
        spacing: {
            auto: 'auto',
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '11': '2.75rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
            '80': '20rem',
            '96': '24rem',
            '128': '32rem',
            '160': '40rem',
            '192': '48rem',
            '224': '56rem',
            '256': '64rem',
        },
        screens: {
            xs: `${breakpoints.xs}px`,
            'xs-only': {
                min: `${breakpoints.xs}px`,
                max: `${breakpoints.sm - 1}px`,
            },
            'xs-max': {
                max: `${breakpoints.sm - 1}px`,
            },
            sm: `${breakpoints.sm}px`,
            'sm-only': {
                min: `${breakpoints.sm}px`,
                max: `${breakpoints.md - 1}px`,
            },
            'sm-max': {
                max: `${breakpoints.md - 1}px`,
            },
            md: `${breakpoints.md}px`,
            'md-only': {
                min: `${breakpoints.md}px`,
                max: `${breakpoints.lg - 1}px`,
            },
            'md-max': {
                max: `${breakpoints.lg - 1}px`,
            },
            lg: `${breakpoints.lg}px`,
            'lg-only': {
                min: `${breakpoints.lg}px`,
                max: `${breakpoints.xl - 1}px`,
            },
            'lg-max': {
                max: `${breakpoints.xl - 1}px`,
            },
            xl: `${breakpoints.xl}px`,
        },
        fontFamily: {
            sans: 'var(--font-sans)',
            // sans: [
            //     'Roboto',
            //     '-apple-system',
            //     'BlinkMacSystemFont',
            //     '"Segoe UI"',
            //     '"Helvetica Neue"',
            //     'Arial',
            //     '"Noto Sans"',
            //     'sans-serif',
            //     '"Apple Color Emoji"',
            //     '"Segoe UI Emoji"',
            //     '"Segoe UI Symbol"',
            //     '"Noto Color Emoji"',
            // ],
            serif: [
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        fontSize: theme => ({
            ...theme('spacing'),
            xxs: '0.6875rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
        }),
        fontWeight: {
            // hairline: 100,
            // thin: 200,
            // light: 300,
            normal: 'var(--font-weight-normal)',
            // medium: 500,
            // semibold: 600,
            bold: 'var(--font-weight-bold)',
            // extrabold: 800,
            // black: 900,
        },
        lineHeight: {
            0: 0,
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },
        letterSpacing: {
            tightest: '-2px',
            tighter: '-1px',
            tight: '-0.5px',
            normal: '0',
            wide: '0.5px',
            wider: '1.5px',
            widest: '2px',
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
            '8': '8px',
        },
        borderColor: theme => ({
            ...theme('colors'),
            current: 'currentColor',
            default: theme('colors.gray.300', 'currentColor'),
        }),
        borderRadius: {
            none: '0',
            default: '3px',
            lg: '7px',
            full: '9999px',
            100: '100%',
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        width: theme => ({
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '5/6': '83.33333%',
            container: `${breakpoints.xl}px`,
            full: '100%',
            screen: '100vw',
        }),
        height: theme => ({
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        minWidth: theme => ({
            none: 'none',
            ...theme('spacing'),
            '1/2': `${breakpoints.xl * (1 / 2)}px`,
            '1/3': `${breakpoints.xl * (1 / 3)}px`,
            '2/3': `${breakpoints.xl * (2 / 3)}px`,
            '1/4': `${breakpoints.xl * (1 / 4)}px`,
            '3/4': `${breakpoints.xl * (3 / 4)}px`,
            '1/5': `${breakpoints.xl * (1 / 5)}px`,
            '2/5': `${breakpoints.xl * (2 / 5)}px`,
            '3/5': `${breakpoints.xl * (3 / 5)}px`,
            '4/5': `${breakpoints.xl * (4 / 5)}px`,
            '1/6': `${breakpoints.xl * (1 / 6)}px`,
            '5/6': `${breakpoints.xl * (5 / 6)}px`,
            container: `${breakpoints.xl}px`,
            full: '100%',
            screen: '100vw',
        }),
        minHeight: {
            none: 'none',
            '0': '0',
            full: '100%',
            screen: '100vh',
        },
        maxWidth: theme => ({
            none: 'none',
            ...theme('spacing'),
            '1/2': `${breakpoints.xl * (1 / 2)}px`,
            '1/3': `${breakpoints.xl * (1 / 3)}px`,
            '2/3': `${breakpoints.xl * (2 / 3)}px`,
            '1/4': `${breakpoints.xl * (1 / 4)}px`,
            '3/4': `${breakpoints.xl * (3 / 4)}px`,
            '1/5': `${breakpoints.xl * (1 / 5)}px`,
            '2/5': `${breakpoints.xl * (2 / 5)}px`,
            '3/5': `${breakpoints.xl * (3 / 5)}px`,
            '4/5': `${breakpoints.xl * (4 / 5)}px`,
            '1/6': `${breakpoints.xl * (1 / 6)}px`,
            '5/6': `${breakpoints.xl * (5 / 6)}px`,
            container: `${breakpoints.xl}px`,
            full: '100%',
            screen: '100vw',
        }),
        maxHeight: theme => ({
            none: 'none',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        padding: theme => theme('spacing'),
        margin: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        boxShadow: {
            1: `0 2px 2px 1px rgba(0, 0, 0, 0.03),
                0 1px 4px 2px rgba(0, 0, 0, 0.05),
                0 1px 1px 0 rgba(0, 0, 0, 0.04)`,
            2: `0 4px 4px 1px rgba(0, 0, 0, 0.03),
                0 1px 6px 2px rgba(0, 0, 0, 0.05),
                0 2px 2px 0 rgba(0, 0, 0, 0.04)`,
            3: `0 6px 6px 1px rgba(0, 0, 0, 0.03),
                0 2px 10px 2px rgba(0, 0, 0, 0.05),
                0 3px 3px 0 rgba(0, 0, 0, 0.08)`,
            4: `0 8px 8px 1px rgba(0, 0, 0, 0.03),
                0 3px 14px 2px rgba(0, 0, 0, 0.05),
                0 5px 5px 0 rgba(0, 0, 0, 0.08)`,
            5: `0 10px 10px 1px rgba(0, 0, 0, 0.03),
                0 4px 16px 2px rgba(0, 0, 0, 0.05),
                0 7px 7px 0 rgba(0, 0, 0, 0.08)`,
            6: `0 4px 16px 2px rgba(0, 0, 0, 0.05),
                0 20px 30px 0 rgba(0, 0, 0, 0.12)`,
            7: `0 4px 16px 2px rgba(0, 0, 0, 0.05),
                0 30px 40px 0 rgba(0, 0, 0, 0.12)`,
            8: `0 4px 16px 2px rgba(0, 0, 0, 0.05),
                20px 42px 71px 0 rgba(0, 0, 0, 0.16)`,
            header: `0 0 9px 0 rgba(0,0,0,0.21)`,
            footer: `0 0 7px 0 rgba(0,0,0,0.14)`,
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
        },
        zIndex: {
            bottom: '-9999',
            top: '9999',
            auto: 'auto',
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
        },
        fill: {
            current: 'currentColor',
        },
        stroke: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            '0': 0,
            default: 1,
        },
        flexShrink: {
            '0': 0,
            default: 1,
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        inset: theme => ({
            ...theme('spacing'),
            '0': 0,
            '50': '50%',
            '100': '100%',
        }),
        container: {},
        extend: {},
    },
    variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive', 'focus'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive', 'important'],
        fill: ['responsive', 'hover', 'focus'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive', 'important'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        order: ['responsive'],
        outline: ['responsive', 'hover', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive', 'important'],
        pointerEvents: ['responsive'],
        position: ['responsive', 'important'],
        resize: ['responsive'],
        stroke: ['responsive', 'hover', 'focus'],
        tableLayout: ['responsive'],
        textAlign: ['responsive', 'important'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive', 'hover', 'focus'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        // !important variant
        function({ addVariant }) {
            addVariant('important', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`
                    rule.walkDecls(decl => {
                        decl.important = true
                    })
                })
            })
        },

        // Screen reader
        function({ addUtilities }) {
            addUtilities(
                {
                    '.screen-reader': {
                        overflow: 'hidden !important',
                        position: 'absolute !important',
                        width: '1px !important',
                        height: '1px !important',
                        margin: '0 !important',
                        padding: '0 !important',
                        border: '0 !important',
                        clip: 'rect(1px, 1px, 1px, 1px) !important',
                    },
                },
                ['responsive']
            )
        },

        // Transition
        function({ addUtilities }) {
            addUtilities(
                {
                    '.transition': {
                        transition: '0.3s ease-in-out',
                    },
                    '.transition-cubic': {
                        transition:
                            '0.55s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    },
                }
                // ['responsive', 'hover']
            )
        },

        // Translate
        function({ addUtilities }) {
            addUtilities(
                {
                    '.translate-x-0': {
                        transform: 'translateX(0)',
                    },
                    '.translate-x-100': {
                        transform: 'translateX(100%)',
                    },
                    '.-translate-x-100': {
                        transform: 'translateX(-100%)',
                    },
                },
                ['hover']
            )
        },

        // Container
        function({ addComponents, config }) {
            addComponents(
                {
                    '.container': {
                        width: '100%',
                        maxWidth: config('theme.screens.xl'),
                        margin: '0 auto',
                        padding: '0 1rem',
                    },
                },
                ['responsive']
            )
        },
    ],
}
