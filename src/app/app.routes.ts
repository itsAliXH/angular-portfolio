import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '' , redirectTo: 'portfolio', pathMatch: 'full'},

    // Lazy load User routes
    {
        path: 'portfolio',
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
