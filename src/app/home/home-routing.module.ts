import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LayoutComponent } from './pages/layout/layout.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'home',
    component: HomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
