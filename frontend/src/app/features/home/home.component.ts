import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  modulet = [
    { titulli: 'Studentët', ikona: 'pi pi-users', link: '/studentet', pershkrimi: 'Menaxhimi i studentëve (funksional)' },
    { titulli: 'Lëndët', ikona: 'pi pi-book', link: '/lendet', pershkrimi: 'Për t\'u implementuar' },
    { titulli: 'Profesorët', ikona: 'pi pi-id-card', link: '/profesoret', pershkrimi: 'Për t\'u implementuar' },
  ];
}
