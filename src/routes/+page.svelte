<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import { _ } from 'svelte-i18n';

	const birthDate = new Date('September 10, 2004');
	const age = Math.floor((Date.now() - birthDate.getTime()) / 31556952000);
</script>

<div class="grid place-items-center gap-4">
	<h1 class="text-4xl font-bold sm:py-3">
		{$_('lumap')}
	</h1>

	<p>
		{$_('home.tagline')}
	</p>

	<hr class="w-full border-t-2 border-black" />

	<div class="grid gap-6 sm:w-4/5">
		<Message>
			<p>
				{$_('home.message.1', { values: { age } })}
			</p>
		</Message>
		<Message>
			<p>
				{@html $_('home.message.2', {
					values: {
						linkToContact: '/contact',
						linkStart: "<a class='text-blue-500 underline' href='/contact'>",
						linkEnd: '</a>'
					}
				})}
			</p>

			<video class="w-[300px] rounded-md" autoplay loop muted playsinline>
				<source src="https://media.tenor.com/lOzSvhm2_SoAAAPo/cat-water.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</Message>
	</div>
</div>
