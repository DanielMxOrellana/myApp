# myApp

Aplicación móvil desarrollada con **Ionic** y **Angular**.

## Estructura de Módulos

- **auth/**: Módulo de autenticación (login).
- **tabs/**: Vista principal con navegación por pestañas.
- **settings/**: Pantalla de configuración.

## Seguridad

- Las rutas privadas están protegidas por un **AuthGuard** ([`canActivateGuard`](src/app/guards/auth.guard.ts)), que verifica la existencia de un token simulado en `localStorage`.

## Navegación

- Se utiliza `navigateRoot()` para limpiar el historial tras login/logout y evitar volver atrás.
- Para navegación estándar, se usa `router.navigate()`.

## Animaciones

- El proyecto utiliza animaciones de [`@angular/animations`](https://angular.io/guide/animations) para transiciones suaves entre vistas.

## Pruebas

- Se incluyen pruebas unitarias para guards y servicios, por ejemplo:
  - [`auth.guard.spec.ts`](src/app/guards/auth.guard.spec.ts)
  - [`app.component.spec.ts`](src/app/app.component.spec.ts)

## Instalación

1. Instala dependencias:
   ```sh
   npm install