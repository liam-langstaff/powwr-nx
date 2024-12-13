import { Component, Input } from '@angular/core';
import { TenderStep } from '../interfaces/tender-step.interface';
import { StatusTagComponent, UiCardComponent } from '@powwr-nx/ui';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tender-step',
  imports: [
    UiCardComponent,
    StatusTagComponent,
    MatIcon
  ],
  templateUrl: './tender-step.component.html',
  styleUrl: './tender-step.component.scss',
  standalone: true
})
export class TenderStepComponent {
  @Input() public step: TenderStep | undefined;
}
