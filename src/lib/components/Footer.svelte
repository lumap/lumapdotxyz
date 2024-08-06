<script lang="ts">
	import { _ } from 'svelte-i18n';

	const currentYear = new Date().getFullYear();
</script>

<footer class="mt-auto grid w-3/4 gap-2 pb-2">
	<hr class="w-full border-t-2 border-gray-500" />
	<div class="grid grid-cols-2 place-items-center gap-2">
		<p>
			{$_('footer.hosted_at', {
				values: {
					host: 'CloudFlare Pages',
					framework: 'SvelteKit'
				}
			})}
		</p>

		<p>© Meow, {currentYear}</p>
	</div>
</footer>
