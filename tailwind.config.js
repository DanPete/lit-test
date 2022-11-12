module.exports = {
  mode: 'jit',
  content: ['./**/*.liquid', './app/scripts/*.{js,ts}', './assets/*.js'],
  prefix: 'tw-',
  theme: {
    extend: {
      spacing: {
        xs: '0.4rem',
        sm: '0.8rem',
        'sm+': '1.2rem',
        md: '1.6rem',
        'md+': '2.4rem',
        lg: '3.2rem',
        'lg+': '4rem',
        xl: '4.8rem',
        'xl+': '5.6rem',
        '2xl': '6.4rem',
        '2xl+': '7.2rem',
        '3xl': '8rem',
        '4xl': '9.6rem',
        '5xl': '11.2rem',
        '6xl': '12.8rem',
      },
      boxShadow: {
        card: '0px 4px 12px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        text: 'rgb(var(--color-base-text), <alpha-value>)',
        shadow: 'rgb(var(--color-base-text), <alpha-value>)',
        'background-1': 'rgb(var(--color-base-background-1), <alpha-value>)',
        'background-2': 'rgb(var(--color-base-background-2), <alpha-value>)',
        'button-solid': 'rgb(var(--color-base-solid-button-labels), <alpha-value>)',
        'button-outline': 'rgb(var(--color-base-outline-button-labels), <alpha-value>)',
        'accent-1': 'rgb(var(--color-base-accent-1), <alpha-value>)',
        'accent-2': 'rgb(var(--color-base-accent-2), <alpha-value>)',
        'brand-1': 'rgb(var(--color-brand-background-1), <alpha-value>)',
        'brand-2': 'rgb(var(--color-brand-background-2), <alpha-value>)',
        'brand-3': 'rgb(var(--color-brand-background-3), <alpha-value>)',
      }
    },
    fontSize: {
      xxs: ['1rem', '1.6'],
      xs: ['1.2rem', '1.6'],
      sm: ['1.4rem', '1.6'],
      base: ['1.6rem', '1.6'],
      lg: ['2.4rem', '1.3'],
      'lg+': ['3.0rem', '1.3'],
      xl: ['3.6rem', '1.36'],
      '2xl': ['4.8rem', '1.36'],
      '3xl': ['6.4rem', '1.36'],
    },
    screens: {
      'sm-max': { max: '649px' },
      sm: '640px',
      'md-max': { max: '749px' },
      md: '750px',
      'lg-max': { max: '989px' },
      tablet: { min: '750px', max: '989px' },
      lg: '990px',
      'xl-max': { max: '1399px' },
      xl: '1400px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};