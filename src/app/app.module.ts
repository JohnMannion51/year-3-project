import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Ionic_2_Firebase } from './app.component';
import { ShowDataPage } from '../pages/show-data/show-data';
import { EnterDataPage } from '../pages/enter-data/enter-data';
import { DataPopoverPage } from '../pages/data-popover/data-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { DataDetailPage } from '../pages/data-detail/data-detail';
import {  MapData } from '../providers/map-data';
import { UserData } from '../providers/user-data';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
export const FirebaseConfig = {
    apiKey: "AIzaSyAJmnl98WcVHRkYHFyq_mDkJThAiD0SLnI",
    authDomain: "fitapp-ace2b.firebaseapp.com",
    databaseURL: "https://fitapp-ace2b.firebaseio.com",
    projectId: "fitapp-ace2b",
    storageBucket: "-",
    messagingSenderId: "1092301276382"
};


export const FirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    Ionic_2_Firebase,
    EnterDataPage,
    ShowDataPage,
    AccountPage,
    LoginPage,
    MapPage,
    DataPopoverPage,
    SignupPage,
    TabsPage,
    DataDetailPage
  ],
  imports: [
    IonicModule.forRoot(Ionic_2_Firebase),
		IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ionic_2_Firebase,
    EnterDataPage,
    ShowDataPage,
    AccountPage,
    LoginPage,
    MapPage,
    DataPopoverPage,
    SignupPage,
    TabsPage,
    DataDetailPage
  ],
  providers: [MapData, UserData, Geolocation, LocationTracker, BackgroundGeolocation ]
})
export class AppModule { }
