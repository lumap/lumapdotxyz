<script>
	import { page } from '$app/stores';

	
	
	/**
	 * @typedef {Object} Props
	 * @property {any} title
	 * @property {any} href
	 */

	/** @type {Props} */
	let { title, href } = $props();
</script>

<a {href} class:navactive={$page.url.pathname === href}>{title}</a>

<style>
	.navactive {
		@apply underline underline-offset-2; /* ignore the "rule @apply not found" error*/
	}
</style>
