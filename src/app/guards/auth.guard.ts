import { authGuard } from './guards/auth.guard'; // 👈 Asegúrate de importar esto

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then((m) => m.tabsRoutes),
    canActivate: [authGuard], // 👈 protección
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.routes').then((m) => m.settingsRoutes),
    canActivate: [authGuard], // 👈 opcional
  },
];
