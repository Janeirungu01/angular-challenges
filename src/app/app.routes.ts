import { Routes, RouterModule } from '@angular/router';
import { authguardGuard } from './authguard-guard';
import { Login } from './login/login';
import { Users } from './users/users';

import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { RepaymentsTable } from './repayments-table/repayments-table';

export const routes: Routes = [
//   { path: 'login', component: Login },
//   { path: 'table', component: Users },

//   { path: 'dashboard', component: Dashboard, canActivate: [authguardGuard] },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

 {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
      { path: 'repayments', component: RepaymentsTable, data: { title: 'Member Management' } },
      // { path: 'loans', component: LoanApplicationsComponent, data: { title: 'Loan Applications' } },
      // { path: 'disbursements', component: DisbursementsComponent, data: { title: 'Disbursements' } },
      // { path: 'repayments', component: RepaymentsComponent, data: { title: 'Repayments' } },
      // { path: 'reports', component: ReportsComponent, data: { title: 'Reports' } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }  // Default
    ]
  },
  { path: '**', redirectTo: 'dashboard' }  // Fallback
];
