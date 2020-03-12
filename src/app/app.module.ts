import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.intercaptor';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {registerLocaleData} from '@angular/common';

import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ImagePicker,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {useClass: AuthInterceptor, provide: HTTP_INTERCEPTORS, multi: true},
        {
            provide: LOCALE_ID,
            useValue: 'ru'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
