import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './auth/auth-guard';
import { Login } from './login/login';
import { Users } from './features/users/users';

import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './layout/layout';
import { RepaymentsTable } from './features/repayments-table/repayments-table';

export const routes: Routes = [
//   { path: 'login', component: Login },
  { path: 'table', component: Users },

//   { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

 {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
      { path: 'users', component: Users, data: { title: 'Member Management' } },
      // { path: 'loans', component: LoanApplicationsComponent, data: { title: 'Loan Applications' } },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }  // Default
    ]
  },
  { path: '**', redirectTo: 'dashboard' }  // Fallback
];
