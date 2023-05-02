import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SearchDeedBuyerComponent } from './layouts/search-deed-buyer/search-deed-buyer.component';
import { SearchDeedRegistrationComponent } from './layouts/search-deed-registration/search-deed-registration.component';
import { SearchDeedSellerComponent } from './layouts/search-deed-seller/search-deed-seller.component';
import { SearchDeedComponent } from './layouts/search-deed/search-deed.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { WebUserDashboardComponent } from './layouts/web-user-dashboard/web-user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      }, {
        path: 'user/forgotPassword',
        component: ForgotPasswordComponent
      }
    ]
  },


{
  path:'web/user/register',
  component:RegisterComponent,
  pathMatch:'full'
},


  {
    path: 'web/user',
    component: UserLayoutComponent,
    children: [{
      path: 'dashboard',
      component:WebUserDashboardComponent
    },
    {
      path:'search-deed',
      component:SearchDeedComponent,
    },
    {
      path:'searchByRegistration',
      component:SearchDeedRegistrationComponent
    },
    {
      path:'searchBySeller',
      component:SearchDeedSellerComponent
    },
    {
      path:'searchByBuyer',
      component:SearchDeedBuyerComponent
    }
  ]
  }








];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
