import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { TurnsComponent } from './turns/turns.component';
import { BusinessAreasComponent } from './business-areas/business-areas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ClientPanelComponent
  },  
  {
    path: 'turns',
    component: TurnsComponent
  },
  {
    path: 'business',
    component: BusinessAreasComponent
  }
  /*,
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  } */
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);