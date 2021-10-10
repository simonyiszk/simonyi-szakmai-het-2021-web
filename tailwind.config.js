const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,tsx,css,scss,mdx,html}"],
	theme: {
		colors,
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
			colors: {
				primary: {
					DEFAULT: "#F8485E",
				},
			},
			fontFamily: {
				schdesign: "schdesign",
				Gobold: [
					"Gobold",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					'"Segoe UI"',
					"Roboto",
				],
				GoboldHollowBold: [
					"Gobold-Hollow-Bold",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					'"Segoe UI"',
					"Roboto",
				],
				GoboldHigh: [
					"Gobold-High",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					'"Segoe UI"',
					"Roboto",
				],
			},
			boxShadow: {
				darker:
					"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
			},
			textShadow: {
				sharp: "2px 2px 2px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	variants: {
		extend: {},
	},
	corePlugins: {
		// animation: false,
	},
	plugins: [aspectRatio, forms, typography],
};
