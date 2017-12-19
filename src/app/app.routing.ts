import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: '',
    component: FrontpageComponent
  },

  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
