import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; 


//PAGES
import { HomePage } from '../pages/home/home';
import {UserPage} from '../pages/user/user'
import {PhotoPage} from'../pages/photo/photo'
//PROVIDERS
import { UsersProvider } from '../providers/users/users';
import { UserProvider } from '../providers/user/user';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    PhotoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    UserProvider
  ]
})
export class AppModule {}
