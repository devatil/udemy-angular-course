import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RoleComponent } from './role/role.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
	declarations: [ AppComponent, RoleComponent, NavbarComponent, SidebarComponent ],
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
		ToastrModule.forRoot({
			timeOut: 2000,
			progressBar: true,
			easing: 'ease-in',
			closeButton: false,
			progressAnimation: 'decreasing',
			preventDuplicates: true,
			positionClass: 'toast-bottom-left'
		})
	],
	providers: [],
	bootstrap: [ AppComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
