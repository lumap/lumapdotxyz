<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	let currentHourMinute = new Date().toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
</script>

<div class="flex gap-4">
	<img src="https://lumap.xyz/favicon.webp" class="size-12 rounded" alt="my pfp" />
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-1">
			<p class="text-sm">
				Lumap<span class="text-gray-500">(@lumap)</span> <span class="text-gray-500">•</span>
				<span class="text-sm">Today at {currentHourMinute}</span>
			</p>
		</div>
		{#if children}{@render children()}{:else}
			<p>This message is empty...</p>
		{/if}
	</div>
</div>
