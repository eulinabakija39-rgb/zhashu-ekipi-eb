import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

// TODO (studentët): krijoni ProfesorService dhe shfaqni listën
@Component({
  selector: 'app-profesor-list',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './profesor-list.component.html',
  styleUrl: './profesor-list.component.scss',
})
export class ProfesorListComponent {}
