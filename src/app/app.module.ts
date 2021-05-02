import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { IntroductionComponent } from './homepage/homepage-introduction/introduction.component';
import { OffersComponent } from './homepage/homepage-services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './homepage/homepage-testimonials/testimonials.component'
import { MatIconModule } from '@angular/material/icon';
import { AboutIntroductionComponent } from './about/about-introduction/about-introduction.component';
import { AboutDescriptionComponent } from './about/about-description/about-description.component';
import { AboutTestimonialsComponent } from './about/about-testimonials/about-testimonials.component';
import { HomepageTrustComponent } from './homepage/homepage-trust/homepage-trust.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '**', component: HomepageComponent},
       ],
       {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
