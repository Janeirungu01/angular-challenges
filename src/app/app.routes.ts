import { Routes } from '@angular/router';
import { authGuard } from './auth/auth-guard';
import { Login } from './login/login';
import { Users } from './features/users/users';
import { Contributions } from './features/contributions/contributions';

import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './layout/layout';

export const routes: Routes = [
   { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
            //   { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
      { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
      { path: 'users', component: Users, data: { title: 'Users Table' } },
      { path: 'contributions', component: Contributions, data: { title: 'Contributions' } },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
