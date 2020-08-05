import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IgxButtonModule } from 'igniteui-angular';
import { RoleComponent } from './role/role.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
	declarations: [ AppComponent, RoleComponent ],
	imports: [
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		NgxSpinnerModule,
		IgxButtonModule,
		AppRoutingModule,
		HomeModule,
		UserModule,
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
