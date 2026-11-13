import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [RouterLink, CardModule, ButtonModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent implements OnInit {
  private studentService = inject(StudentService);

  /** Merret automatikisht nga parametri i route-it :id (withComponentInputBinding) */
  @Input() id!: string;

  student?: Student;
  notFound = false;

  ngOnInit(): void {
    this.studentService.getById(Number(this.id)).subscribe({
      next: (s) => (this.student = s),
      error: () => (this.notFound = true),
    });
  }
}
