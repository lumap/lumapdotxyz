<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Separator } from '$lib/components/ui/separator';

	import { myFavoritesList } from '$lib/consts';

	const birthDate = new Date('September 10, 2004');
	const age = Math.floor((Date.now() - birthDate.getTime()) / 31556952000);
</script>

<svelte:head>
	<title>Lumap</title>
	<meta name="description" content="the silly website of a silly meower" />
</svelte:head>

<div class="grid place-items-center gap-4">
	<h1 class="text-4xl font-bold sm:py-3">
		Lumap
	</h1>

	<p>
		My silly little website!
	</p>

	<Separator />

	<div class="grid gap-6 sm:w-4/5">
		<Message>
			<p>
				Hello hello! I'm Lumap, a {age} silly guy wandering on the internet all day, waiting for something to eventually happen...
			</p>
		</Message>

		<Message>
			<p>
				I absolutely love cats, and especially silly cat gifs! Please send me some <a class='text-blue-500 underline' href='/contact'>here</a>!
			</p>

			<video class="w-[300px] rounded-md" autoplay loop muted playsinline>
				<source src="https://media.tenor.com/lOzSvhm2_SoAAAPo/cat-water.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</Message>

		<Message>
			<p>
				Wanna know more about me? Sure thing, here's a few things I like:
			</p>

			<Accordion.Root>
				{#each myFavoritesList.getKeys() as category}
					<Accordion.Item value={category}>
						<Accordion.Trigger>{myFavoritesList.getCategoryName(category)}</Accordion.Trigger>
						<Accordion.Content>
							<ul class="list-inside list-disc">
								{#each myFavoritesList[category] as elm}
									<li>
										<a href={elm.link} class="text-blue-500 underline">
											{elm.title}
										</a>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</Message>
	</div>
</div>
