import { appLanguages } from "$lib/i18n";
import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email().optional(),
	message: z.string().min(10).max(500),
	lang: z.enum(appLanguages)
});

export type FormSchema = typeof formSchema;
