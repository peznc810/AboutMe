tailwind.config = {
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: {
        DEFAULT: '1rem',
      },
      },
      colors: {
        primary: '#263781',
        secondary:'#F9B035',
        info:'#343434',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    }
  }
}