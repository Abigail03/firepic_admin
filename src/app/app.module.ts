import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { TabsPage } from '../pages/tabs/tabs';
import { AgregarPage } from '../pages/agregar/agregar';

//plugins
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { HttpClientModule } from '@angular/common/http';

//plugins angularfire2
//import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AgregarDosPage } from '../pages/agregar-dos/agregar-dos';
//import { BebidasDosPage } from '../pages/bebidas-dos/bebidas-dos';
import { HomeDosPage } from '../pages/home-dos/home-dos';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PageDosPage } from '../pages/page-dos/page-dos';
import { AgregarBebidaPage } from '../pages/agregar-bebida/agregar-bebida';

const FIREBASE_CREDENTIALS = {
  apiKey: "AIzaSyBKMAzT7fVFZ5BZ9boebFeW1aH7wiEpRyo",
  authDomain: "firepic-c3965.firebaseapp.com",
  databaseURL: "https://firepic-c3965.firebaseio.com",
  projectId: "firepic-c3965",
  storageBucket: "firepic-c3965.appspot.com",
  messagingSenderId: "1025646433878"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidasPage,
    TabsPage,
    AgregarPage,
    AgregarDosPage,
    AgregarBebidaPage,
    HomeDosPage,
    LoginPage,
    PageDosPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidasPage,
    TabsPage,
    AgregarPage,
    AgregarDosPage,
    AgregarBebidaPage,
    HomeDosPage,
    LoginPage,
    PageDosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    ImagePicker,
    Camera
  ]
})
export class AppModule {}
