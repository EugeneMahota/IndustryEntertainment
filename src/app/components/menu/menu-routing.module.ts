import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {path: 'group-service', children: [
          {path: '', loadChildren: () => import('../../controllers/group-service/group-service.module').then(m => m.GroupServiceModule)}]},
      {path: 'product', children: [
          {path: '', loadChildren: () => import('../../controllers/product/product.module').then(m => m.ProductModule)}]},
      {path: 'profile', children: [
          {path: '', loadChildren: () => import('../../controllers/profile/profile.module').then(m => m.ProfileModule)}]},
      {path: 'news', children: [
          {path: '', loadChildren: () => import('../../controllers/news/news.module').then(m => m.NewsModule)}]},
      {path: 'forum', children: [
          {path: '', loadChildren: () => import('../../controllers/forum/forum.module').then(m => m.ForumModule)}]},
      {path: '', redirectTo: '/menu/product', pathMatch: 'full'}
    ]
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
