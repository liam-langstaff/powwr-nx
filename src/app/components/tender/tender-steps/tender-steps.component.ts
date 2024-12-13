import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '@powwr-nx/ui';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TenderStep } from './interfaces/tender-step.interface';
import { TenderStepComponent } from './tender-step/tender-step.component';
import { TENDER_CARDS } from '../../../shared/data/fake-data';

@Component({
  selector: 'app-tender-steps',
  imports: [
    BreadcrumbComponent,
    TenderStepComponent
  ],
  templateUrl: './tender-steps.component.html',
  styleUrl: './tender-steps.component.scss',
  standalone: true
})
export class TenderStepsComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  readonly pageTitle = toSignal(
    this._activatedRoute.data.pipe(map(data => data['title']))
  );
  private readonly tenderId: string | null = '';
  public breadcrumbs = [{
    label: 'My Deals',
    route: '/'
  }, {
    label: 'New Tender',
    route: '/tender/' + this.tenderId
  }];

  steps: TenderStep[] = TENDER_CARDS;

  readonly currentTender = toSignal(this._activatedRoute.paramMap.pipe(map(params => {
    const tenderId = params.get('id');
    const dealIds = JSON.parse(localStorage.getItem('dealIds') || '[]');
    return dealIds.find((deal: { id: string }) => deal.id === tenderId);
  })));

  readonly tenderType = computed(() => {
    return this.currentTender().type;
  });

}
