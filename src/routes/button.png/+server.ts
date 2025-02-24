import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const filePath = '/../../static/button.png'; // path to your image in your worker's assets or external storage

  // Fetch the image content (either from your static assets or a URL)
  const fileContent = await fetch(filePath);
  
  if (!fileContent.ok) {
    return new Response('Image not found', { status: 404 });
  }

  return new Response(fileContent.body, {
    headers: {
      'Content-Type': 'image/png',
      'Access-Control-Allow-Origin': '*',  // CORS header for allowing all origins
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};

export const OPTIONS: RequestHandler = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',  // CORS header for allowing all origins
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
