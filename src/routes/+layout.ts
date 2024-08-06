import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser) {
		const langCookie = document.cookie.match(/lang=([^;]+)/);
		if (langCookie) {
			locale.set(langCookie[1]);
		} else {
			locale.set(window.navigator.language);
		}
	}
	await waitLocale();
};
