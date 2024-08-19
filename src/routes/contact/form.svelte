<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from "$lib/components/ui/textarea";

	import { type Infer, superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from "svelte-sonner";

	import { formSchema, type FormSchema } from './form-schema';
	import { locale } from "svelte-i18n";

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, submitting, message } = form;

	$: message.subscribe((msg) => {
		if (msg?.type === "error") {
			toast.error(msg.text);
		} else if (msg?.type === "success") {
			toast.success(msg.text);
		}
	});
</script>

<form method="POST" use:enhance class="flex flex-col gap-2">
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Form.Description>Who are you?</Form.Description>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email (optional)</Form.Label>
			<Form.Description>How I'll reply to you. If not provided, don't expect any reply lol.</Form.Description>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control let:attrs>
			<Form.Label>Message</Form.Label>
			<Form.Description>What do you want to tell me?</Form.Description>
			<Textarea {...attrs} bind:value={$formData.message} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<input type="hidden" name="lang" value={$locale} />

	<Form.Button disabled={$submitting}>Submit</Form.Button>

	<!-- <Form.Button on:click={() => {
		toast.success('Form submitted!');
	}}>Submit</Form.Button> -->
</form>
