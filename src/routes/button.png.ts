import type { RequestHandler } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const GET: RequestHandler = async ({ request }) => {
  const filePath = resolve('static', 'button.png');
  const fileContent = readFileSync(filePath);

  return new Response(fileContent, {
    headers: {
      'Content-Type': 'image/png',
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Cache-Control'
    }
  });
};

export const OPTIONS: RequestHandler = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Cache-Control'
    }
  });
};