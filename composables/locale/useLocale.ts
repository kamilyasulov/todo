import type { Ref } from "vue"

export default function useLocale(fallback = "en"): Ref<string> {
	const preferredLanguages = $(usePreferredLanguages())

	const locale = preferredLanguages.find(
		(lang) => availableLocales.includes(lang),
	)
    || preferredLanguages.find((lang) => availableLocales.includes(lang.slice(0, 2)))?.slice(0, 2)
    || fallback

	return useLocalStorage("locale", locale)
}
