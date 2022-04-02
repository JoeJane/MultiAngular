import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StoreFirstGuard} from "./guards/storeFirstGuard";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, data: {title: 'Register User'}},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
