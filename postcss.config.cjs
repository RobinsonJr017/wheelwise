module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-preset-mantine": {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
