import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Storage} from './storage/storage';


 const  approuting = [
{path:'', component: LoginComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'logout',component:LogoutComponent},
{path:'dahboard',component:DashboardComponent}
 ]



@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [Storage,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
