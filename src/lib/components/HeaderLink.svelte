<script>
	import { page } from '$app/stores';

	/** @type{string} */
	export let title;
	/** @type{string} */
	export let href;
</script>

<a {href} class:navactive={$page.url.pathname === href}>{title}</a>

<style>
	.navactive {
		@apply underline underline-offset-2; /* ignore the "rule @apply not found" error*/
	}
</style>
