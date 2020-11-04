import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfAVtarComponent } from './conf-avtar/conf-avtar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutnavbarComponent } from './aboutnavbar/aboutnavbar.component';
import { FAQComponent } from './faq/faq.component';
import { ContectComponent } from './contect/contect.component';
import { APIComponent } from './api/api.component';
import { FilterPipe } from "./Class/filteruseges";
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider
} from 'angularx-social-login';
import { LoginwithmailComponent } from './loginwithmail/loginwithmail.component';
import { BlogComponent } from './blog/blog.component';
import { AddPostComponent } from './add-post/add-post.component';
import {NgxImageCompressService} from 'ngx-image-compress';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxSpinnerModule } from "ngx-spinner";

const firebaseConfig = {
  apiKey: "AIzaSyCOnQJcLwUM1pudXx45RgYH3sVIYNLM4jA",
  authDomain: "nurse-ovsm.firebaseapp.com",
  databaseURL: "https://nurse-ovsm.firebaseio.com",
  projectId: "nurse-ovsm",
  storageBucket: "nurse-ovsm.appspot.com",
  messagingSenderId: "901153107792",
  appId: "1:901153107792:web:b7174ee8f877398d588655",
  measurementId: "G-J3W9VXDQZ3"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ConfAVtarComponent,
    AboutusComponent,
    AboutnavbarComponent,
    FAQComponent,
    FilterPipe,
    ContectComponent,
    APIComponent,
    FooterComponent,
    LoginComponent,
    LoginwithmailComponent,
    BlogComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SocialLoginModule,
    NgxSpinnerModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '976573038155-8fmjdaidg3gf7pb4vg3u2n3f8tbofv4e.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3704226342960783'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    NgxImageCompressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
