import { Route } from '@angular/router';
import { DealsComponent } from './components/tender/deals/components/deals.component';
import { TenderStepsComponent } from './components/tender/tender-steps/tender-steps.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/deals', pathMatch: 'full' },
  {
    path: 'deals',
    component: DealsComponent,
    data: { title: 'My Deals' }
  },
  {
    path: 'deals/:id',
    component: TenderStepsComponent,
    data: { title: 'New tender' }
  }

];

//TODO: Add 404