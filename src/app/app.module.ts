import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { ClientComponent } from './components/admin/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { WebUserDashboardComponent } from './layouts/web-user-dashboard/web-user-dashboard.component';
import { WebUserMenuComponent } from './layouts/web-user-menu/web-user-menu.component';
import { SearchDeedComponent } from './layouts/search-deed/search-deed.component';
import { SearchDeedRegistrationComponent } from './layouts/search-deed-registration/search-deed-registration.component';
import { MatRadioModule} from '@angular/material/radio';
import { SearchDeedSellerComponent } from './layouts/search-deed-seller/search-deed-seller.component';
import { SearchDeedBuyerComponent } from './layouts/search-deed-buyer/search-deed-buyer.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ClientComponent,
    HomeComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserLayoutComponent,
    WebUserDashboardComponent,
    WebUserMenuComponent,
    SearchDeedComponent,
    SearchDeedRegistrationComponent,
    SearchDeedSellerComponent,
    SearchDeedBuyerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    LayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
