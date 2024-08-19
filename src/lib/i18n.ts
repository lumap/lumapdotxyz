import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

export const appLanguages = ['en', 'fr'] as const;

appLanguages.forEach((lang) => {
	try {
		register(lang, () => import(`../locales/${lang}.json`));
	} catch (e) {
		console.error(`Failed to register locale ${lang}`);
	}
});

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
