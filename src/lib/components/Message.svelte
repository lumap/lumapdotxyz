<script>
	let currentHourMinute = new Date().toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
</script>

<div class="flex gap-4">
	<img src="/favicon.webp" alt="The silly's pfp" class="h-12 rounded-full" />
	<div class="flex flex-col gap-1">
		<div class="flex items-center gap-1">
			<p class="text-sm">
				Lumap<span class="text-gray-500">(@lumap)</span> <span class="text-gray-500">•</span>
				<span class="text-sm">Today at {currentHourMinute}</span>
			</p>
		</div>
		<slot>
			<p>This message is empty...</p>
		</slot>
	</div>
</div>
