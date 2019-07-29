import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteguardService } from './routeguard.service';

import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: `Home`, component: HeaderComponent },
  { path: `Login`, component: LoginComponent },
  { path: `Signup`, component: SignupComponent },
  { path: `Contactus`, component: ContuctUsComponent },
  { path: `About`, component: IntroductionComponent },
  { path: `Gallery`, component: GalleryComponent },
  { path: `Services`, component: ContentComponent },
  { path: `Testimonials`, component: TestimonialsComponent },
  { path: `Clients`, component: ClientsComponent },
  { path: `Blog`, component: BlogComponent, canActivate: [RouteguardService] },
  { path: `Pricing`, component: PricingComponent },
  { path: `404`, component: NotfoundComponent },
  { path: `Article/:id`, component: ArticleComponent },
  { path: `**`, redirectTo: '/404' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
