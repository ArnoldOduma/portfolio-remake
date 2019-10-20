import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Arnold\'s Portfolio' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Me' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'My Portfolio' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { title: 'What I Do' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: '404 Page Not Found' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,
      scrollPositionRestoration: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
