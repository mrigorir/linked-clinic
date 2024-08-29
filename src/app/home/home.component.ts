import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    NavbarComponent,
    FeaturesComponent,
    AppointmentComponent,
    RegisterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  scrollTo(element: any): void {
    console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
