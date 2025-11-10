import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "landing",
    loadComponent: () => import("./pages/landing/landing.component"),
  },
  {
    path: "hydrate",
    loadComponent: () => import("./pages/hydrate/hydrate.component"),
  },
  {
    path: "event-replay",
    loadComponent: () => import("./pages/event-replay/event-replay.component"),
  },
  { path: "", redirectTo: "landing", pathMatch: "full" },
];
