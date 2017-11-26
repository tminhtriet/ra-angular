import { Routes } from '@angular/router';

import { LoginRoutes } from './component/login/login.routes';
import { TemplateRoutes } from './component/template/template.routes';

import { LoginComponent } from './component/login/index';

export const router: Routes = [
    ...LoginRoutes,
    ...TemplateRoutes,

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

    {path: 'login', component: LoginComponent}
];