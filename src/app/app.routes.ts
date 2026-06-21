import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { AccountType } from './pages/account-type/account-type';
import { RegisterClient } from './pages/register-client/register-client';
import { RegisterSeller } from './pages/register-seller/register-seller';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'register',
    component: AccountType
  },
  {
    path: 'register-client',
    component: RegisterClient
  },
  {
    path: 'register-seller',
    component: RegisterSeller
  }
];