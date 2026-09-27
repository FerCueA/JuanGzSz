import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getAllowedHosts, getContext } from '@netlify/angular-runtime/app-engine.js';

const angularAppEngine = new AngularAppEngine({
  allowedHosts: getAllowedHosts(),
});

/**
 * Request handler used by Netlify (see `@netlify/angular-runtime`).
 * Renders the Angular application and falls back to a 404 response.
 *
 * Example API endpoints can be defined here:
 * ```ts
 * const pathname = new URL(request.url).pathname;
 * if (pathname === '/api/hello') {
 *   return Response.json({ message: 'Hello from the API' });
 * }
 * ```
 */
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/** Request handler used by the Angular CLI (dev-server and during build). */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
