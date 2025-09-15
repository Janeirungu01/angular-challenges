import { Routes, RouterModule } from '@angular/router';
import { authguardGuard } from './authguard-guard';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Navbar, canActivate: [authguardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
