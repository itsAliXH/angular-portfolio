import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '' , redirectTo: 'user', pathMatch: 'full'},

    // Lazy load User routes
    {
        path: 'user',
        loadChildren: () =>
        import('./user/user.routes').then(m => m.USER_ROUTES)
    },

    // Lazy load Admin routes
    {
        path: 'admin',
        loadChildren: () =>
        import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
];
