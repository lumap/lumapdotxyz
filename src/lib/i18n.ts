import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

const appLanguages = ['en', 'fr'];

appLanguages.forEach((lang) => {
	try {
		register(lang, () => import(`../locales/${lang}.json`));
	} catch (e) {
		console.error(`Failed to register locale ${lang}`);
	}
});

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
