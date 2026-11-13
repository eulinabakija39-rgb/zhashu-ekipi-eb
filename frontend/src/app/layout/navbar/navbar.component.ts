import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] = [
    { label: 'Ballina', icon: 'pi pi-home', routerLink: '/home' },
    {
      label: 'Studentët',
      icon: 'pi pi-users',
      items: [
        { label: 'Lista', icon: 'pi pi-list', routerLink: '/studentet' },
        { label: 'Shto student', icon: 'pi pi-plus', routerLink: '/studentet/shto' },
      ],
    },
    { label: 'Lëndët', icon: 'pi pi-book', routerLink: '/lendet' },
    { label: 'Profesorët', icon: 'pi pi-id-card', routerLink: '/profesoret' },
  ];
}
