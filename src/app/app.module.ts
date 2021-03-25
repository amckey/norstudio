import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { IntroductionComponent } from './homepage/introduction/introduction.component';
import { OffersComponent } from './homepage/offers/offers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './homepage/testimonials/testimonials.component'
import {MatIconModule} from '@angular/material/icon';



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
  ],
  imports: [
    BrowserModule,
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
        ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
