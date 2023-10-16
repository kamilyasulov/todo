/* eslint-disable import/no-extraneous-dependencies */
import fs from "node:fs"
import { transformShortVmodel } from "@vue-macros/short-vmodel"

const locales = fs.readdirSync("locales")
	.map((file) => ({
		code: file.replace(/\.(yml|yaml|json)$/, ""),
		file,
	}))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {},

	app: {
		head: {
			title: "Kamado",
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	imports: { // add folders here to auto-import them in your application
		dirs: [
			"stores",
			"composables/**",
		],
	},
	components: [{ path: "~/components", pathPrefix: false }],

	css: ["@/assets/css/main.css", "@/assets/css/reset.css"],

	modules: [
		"@vueuse/nuxt",
		"@vue-macros/nuxt",
		"@pinia/nuxt",
		"@nuxtjs/i18n",
		"@nuxtjs/google-fonts",
		"@nuxt/image-edge",
		"@nuxtjs/critters",
		"@nuxtjs/color-mode",
		"@nuxtjs/html-validator",
	],

	vue: {
		compilerOptions: {
			nodeTransforms: [transformShortVmodel({ prefix: "::" })],
		},
	},
	macros: {
		exportProps: true,
		reactivityTransform: true,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	i18n: {
		langDir: "locales",
		defaultLocale: "en",
		locales,
	},
	pinia: {
		autoImports: [
			"defineStore",
			["defineStore", "definePiniaStore"],
			"storeToRefs",
		],
	},
})
