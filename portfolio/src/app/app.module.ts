import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxContentLoadingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.doubleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.2)',
      backdropBorderRadius: '10px',
      primaryColour: '#ff6e3a',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
