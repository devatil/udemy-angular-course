import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './navbar/navbar.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
} from 'igniteui-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StorageModule } from './storage/storage.module';
import { DirectivesModule } from './directives/directives.module';
import { CookieService } from 'ngx-cookie-service';
import { PipesModule } from './pipes/pipes.module';
import { Parent1Module } from './parent1/parent1.module';
import { AngularFormsModule } from './forms/forms.module';
import { UserService } from '../libs';
import { MapModule } from './map/map.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RoleModule } from './role/role.module';
import { AuthInterceptor } from '../libs/interseptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    DataBindingModule,
    StorageModule,
    DirectivesModule,
    PipesModule,
    Parent1Module,
    MapModule,
    HttpClientModule,
    AngularFormsModule,
    RoleModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      easing: 'ease-in',
      closeButton: false,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
      positionClass: 'toast-bottom-left',
    }),
  ],
  providers: [
    CookieService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
