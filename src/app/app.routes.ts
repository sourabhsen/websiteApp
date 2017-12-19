// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { SkillsComponent } from './component/skills/skills.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact',component:ContactComponent},
  { path: 'skills',component:SkillsComponent},
  { path: 'portfolio',component:PortfolioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);