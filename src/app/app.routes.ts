import { Routes, RouterModule } from '@angular/router';
import { authguardGuard } from './authguard-guard';
import { Login } from './login/login';

import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authguardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
