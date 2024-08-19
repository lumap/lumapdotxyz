<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";

	import { _ } from 'svelte-i18n';

	const currentYear = new Date().getFullYear();
</script>

<footer class="mt-auto grid w-full sm:w-3/4 gap-2 pb-2">
	<Separator />

	<div class="grid sm:grid-cols-2 place-items-center gap-2">
		<p>
			{@html $_('footer.hosted_at', {
				values: {
					host: 'CloudFlare Pages',
					framework:
						'<a class="text-blue-500 underline" href="https://github.com/lumap/lumapdotxyz">SvelteKit</a>'
				}
			})}
		</p>

		<p>
			© {$_('lumap')}, {#if currentYear === 2024}
				{currentYear}
			{:else}
				2024 - {currentYear}
			{/if}
		</p>
	</div>
</footer>
