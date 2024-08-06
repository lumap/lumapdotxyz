<script>
	import Message from '$lib/components/Message.svelte';
</script>

<div class="grid place-items-center gap-4">
	<h1 class="text-4xl font-bold sm:py-3">Lumap</h1>
	<p>Welcome to my silly website!</p>

	<hr class="w-full border-t-2 border-black" />

	<div class="grid gap-6 sm:w-4/5">
		<Message>
			<p>
				Hello there! I'm Lumap, a silly 19 y/o guy on the internet doing next to nothing all day! :3
			</p>
		</Message>
		<Message>
			<p>
				I absolutely love cat gifs. Please send me some <a
					class="text-blue-600 underline"
					href="/contact">here!</a
				>
			</p>

			<video class="w-[300px] rounded-md" autoplay loop muted playsinline>
				<source src="https://media.tenor.com/lOzSvhm2_SoAAAPo/cat-water.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<!-- <TenorGif tenorURL="https://tenor.com/view/cat-whar-whar-what-cat-whar-cat-cat-whar-slow-blink-orange-cat-whar-slow-blink-gif-6291533950402242103"/> -->
		</Message>
	</div>
</div>
