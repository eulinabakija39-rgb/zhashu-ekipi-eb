import { Component, Input } from '@angular/core';

// TODO (studentët): merrni profesorin nga backend-i sipas id (shih StudentDetailComponent)
@Component({
  selector: 'app-profesor-detail',
  standalone: true,
  imports: [],
  templateUrl: './profesor-detail.component.html',
  styleUrl: './profesor-detail.component.scss',
})
export class ProfesorDetailComponent {
  @Input() id!: string;
}
