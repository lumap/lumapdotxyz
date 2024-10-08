import type { PageServerLoad, Actions } from './$types';
import { formSchema } from './form-schema';

import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { sendWebhookMessage } from '$lib/server/webhook';
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return message(form, {
				type: 'error',
				text: 'Please fill in all required fields'
			});
		}
    const blockedWords = ["google", "seo", "search"];
    const formMessage = form.data.message.toLowerCase();
		if (blockedWords.some(word => formMessage.includes(word))) {
		  return message(form, {
        type: 'error',
        text: 'Your message contains blocked words.'
  		});
		}
		await sendWebhookMessage(form.data.name, form.data.message, form.data.email);
		return message(form, {
			type: 'success',
			text: 'Message sent successfully!'
		});
	}
};
