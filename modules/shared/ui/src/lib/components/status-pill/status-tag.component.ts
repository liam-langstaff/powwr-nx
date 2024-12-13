import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Status } from '../../enums/status.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-status-tag',
  standalone: true,
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './status-tag.component.html',
  styleUrl: './status-tag.component.scss'
})
export class StatusTagComponent {
  @Input()
  public status: Status = Status.pending;
}
