import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'menu',
        canActivate: [AuthGuard],
        loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'fast-register',
        loadChildren: () => import('./components/fast-register/fast-register.module').then(m => m.FastRegisterModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => import('./components/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
    },
    {path: '', redirectTo: '/menu/product', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
