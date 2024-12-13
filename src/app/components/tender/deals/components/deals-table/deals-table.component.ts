import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, ViewChild } from '@angular/core';
import { DealsService } from '../../services/deals.service';
import { map, Subject, switchMap, tap } from 'rxjs';
import { Deal } from '../../interfaces/deal.interface';

export interface Params {
  pageIndex?: number;
  pageSize?: number;
  sortDirection?: string;
  sortField?: string;
}

@Component({
  selector: 'app-deals-table',
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    DatePipe,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatSortModule,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './deals-table.component.html',
  styleUrl: './deals-table.component.scss',
  standalone: true
})
export class DealsTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  private readonly _dealService = inject(DealsService);

  private readonly isLoading$ = new EventEmitter<boolean>();
  isLoading = toSignal(this.isLoading$);

  private readonly tableData$$ = new Subject<Params>();
  private readonly tableData$ =
    this.tableData$$.pipe(
      tap(() => this.isLoading$.emit(true)),
      switchMap((params) => this._dealService.getTableData(params)),
      map((res) => new MatTableDataSource(res)),
      tap((res) => {
        res.paginator = this.paginator;
        res.sort = this.sort;
        this.isLoading$.emit(false);
      }));

  readonly tableData = toSignal(this.tableData$, { initialValue: new MatTableDataSource<Deal>([]) });

  displayedColumns: string[] = ['created', 'dueDate', 'status', 'customer', 'meters', 'quotes', 'updates'];
  placeholderData = Array(10);

  constructor() {
    this.tableData$$.next(
      {
        pageIndex: 0,
        pageSize: 10,
        sortDirection: 'asc',
        sortField: 'created'
      });
  }
}
