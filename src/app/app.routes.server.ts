import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'landing',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'hydrate',
    renderMode: RenderMode.Server
  },
  {
    path: 'event-replay',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
