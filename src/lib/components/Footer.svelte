<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';

	const currentYear = new Date().getFullYear();
</script>

<footer class="mt-auto grid w-full gap-4 pb-4 sm:w-3/4">
	<Separator />

	<div class="grid place-items-center gap-2 sm:grid-cols-2">
		<p>
			This website is <a class="text-blue-500 underline" href="https://github.com/lumap/lumapdotxyz">Open Source</a>!
		</p>

		<p>
			© Lumap, {#if currentYear === 2024}
				{currentYear}
			{:else}
				2024 - {currentYear}
			{/if}
		</p>
	</div>
</footer>
