import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

import { StudentService } from '../../../core/services/student.service';
import { CreateStudentDto } from '../../../core/models/student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, ButtonModule, MessageModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss',
})
export class StudentFormComponent {
  private fb = inject(FormBuilder);
  private studentService = inject(StudentService);
  private router = inject(Router);

  saving = false;
  errorMessage = '';

  form = this.fb.nonNullable.group({
    emri: ['', Validators.required],
    mbiemri: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  /** POST /api/studentet */
  ruaj(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const dto: CreateStudentDto = this.form.getRawValue();

    this.studentService.create(dto).subscribe({
      next: () => this.router.navigate(['/studentet']),
      error: (err) => {
        this.saving = false;
        this.errorMessage = err?.error?.message ?? 'Ruajtja dështoi';
      },
    });
  }

  /** Ndihmës për template: a ka gabim fusha? */
  invalid(field: 'emri' | 'mbiemri' | 'email'): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }
}
