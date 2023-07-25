import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';

const app = new Hono().basePath('/api');

const route = app.get('/foo', (c) => {
  return c.jsonT({
    message: 'Hello World!',
  });
});

export const onRequest = handle(app);

export type AppType = typeof route;
