import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { IntroductionComponent } from './homepage/homepage-introduction/introduction.component';
import { OffersComponent } from './homepage/homepage-services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './homepage/homepage-testimonials/testimonials.component'
import { AboutIntroductionComponent } from './about/about-introduction/about-introduction.component';
import { AboutDescriptionComponent } from './about/about-description/about-description.component';
import { AboutTestimonialsComponent } from './about/about-testimonials/about-testimonials.component';
import { HomepageTrustComponent } from './homepage/homepage-trust/homepage-trust.component';
import { ServicesIntroductionComponent } from './services/services-introduction/services-introduction.component';
import { ServicesDescriptionComponent } from './services/services-description/services-description.component';
import { ServicesWhyusComponent } from './services/services-whyus/services-whyus.component';
import { ServicesHowitworksComponent } from './services/services-howitworks/services-howitworks.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './development/development.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OffersComponent,
    HomepageComponent,
    ServicesComponent,
    IntroductionComponent,
    OffersComponent,
    PortfolioComponent,
    ContactsComponent,
    AboutComponent,
    TestimonialsComponent,
    AboutIntroductionComponent,
    AboutDescriptionComponent,
    AboutTestimonialsComponent,
    HomepageTrustComponent,
    ServicesIntroductionComponent,
    ServicesDescriptionComponent,
    ServicesWhyusComponent,
    ServicesHowitworksComponent,
    PrivacyComponent,
    HomeComponent,
    DevelopmentComponent,
    MarketingComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'development', component: DevelopmentComponent},
      {path: 'marketing', component: MarketingComponent},

       ],
       {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
