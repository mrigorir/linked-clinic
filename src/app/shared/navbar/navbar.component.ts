import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { Navbar } from '../interfaces/Navbar.interface';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navItems: Navbar[] = [
    {
      title: 'Sobre nosotros',
      anchor: 'us'
    },
    {
      title: 'Servicios',
      anchor: 'services'
    },
    {
      title: 'Agendar cita',
      anchor: 'hook'
    },
    {
      title: 'Registrarse',
      anchor: 'register'
    },
  ]
  onScroll = output<string>();

  scrollTo($element: string): void {
    this.onScroll.emit($element);
  }
 }
