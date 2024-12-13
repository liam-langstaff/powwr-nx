import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DealsTableComponent } from './deals-table/deals-table.component';
import { DropdownButtonComponent, MenuList } from '@powwr-nx/ui';
import { DealsService } from '../services/deals.service';
import { TenderType } from '../enums/tender-type.enum';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, DealsTableComponent, DropdownButtonComponent],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
  private readonly _dealService = inject(DealsService);
  private readonly _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  readonly pageTitle = toSignal(
    this._activatedRoute.data.pipe(map(data => data['title']))
  );

  isLoading = this._dealService.isLoading;

  menuList: MenuList[] = [
    {
      id: '1',
      label: 'Create new tender (Electricity)',
      route: '/',
      callback: () => this.create(TenderType.electricity)
    },
    {
      id: '2',
      label: 'Create new tender (Gas)',
      route: '/',
      callback: () => this.create(TenderType.gas)
    },
    {
      id: '3',
      label: 'Create new tender (Water)',
      route: '/',
      callback: () => this.create(TenderType.water)
    }
  ];

  private create(type: TenderType) {
    // this can be more declarative if the dropdown outputed an event which emitts the ID
    // of the selected menu item. We could then trigger a stream using Subjects which fires
    // the create deal api.
    this._dealService.createDeal(type).pipe(take(1)).subscribe((res) => this._router.navigate([`/deals/${res.id}`]));
  }

}
