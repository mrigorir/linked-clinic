import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'appointment',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentComponent { }
