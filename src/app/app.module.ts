import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';
import {HomeModule} from './home/home.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';
import {NavbarComponent} from './navbar/navbar.component';
import {IgxIconModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxSelectModule,} from 'igniteui-angular';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DataBindingModule} from './data-binding/data-binding.module';
import {StorageModule} from './storage/storage.module';
import {DirectivesModule} from './directives/directives.module';
import {CookieService} from 'ngx-cookie-service';
import {PipesModule} from './pipes/pipes.module';
import {Parent1Module} from './parent1/parent1.module';
import {AngularFormsModule} from './forms/forms.module';
import {UserService} from '../libs';
import {MapModule} from './map/map.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule,} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService,} from '@ngx-translate/core';
import {RoleModule} from './role/role.module';
import {AuthInterceptor} from '../libs/interseptors/auth.interceptor';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    IgxSelectModule,
    DataBindingModule,
    StorageModule,
    DirectivesModule,
    PipesModule,
    Parent1Module,
    MapModule,
    HttpClientModule,
    AngularFormsModule,
    RoleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
    TranslateService,
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
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    '../assets/i18n',
    '.json?cb=' + new Date().getTime()
  );
}
