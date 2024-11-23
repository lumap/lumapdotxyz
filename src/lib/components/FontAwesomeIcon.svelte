<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	interface Props {
		icon: IconDefinition;
		[key: string]: any
	}

	let { ...props }: Props = $props();

	const i = props.icon.icon;
</script>

<svg
	class={props.class + ' h-7 w-7'}
	fill="currentColor"
	viewBox="0 0 {i[0]} {i[1]}"
	xmlns="http://www.w3.org/2000/svg"
>
	<g transform="translate({i[0] / 2} {i[1] / 2})" transform-origin="{i[0] / 4} 0">
		{#if typeof i[4] == 'string'}
			<path d={i[4]} fill="currentColor" transform="translate({i[0] / -2} {i[1] / -2})" />
		{:else}
			<path d={i[4][0]} fill="currentColor" transform="translate({i[0] / -2} {i[1] / -2})" />
			<path d={i[4][1]} fill="currentColor" transform="translate({i[0] / -2} {i[1] / -2})" />
		{/if}
	</g>
</svg>