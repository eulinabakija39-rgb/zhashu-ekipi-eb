import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [RouterLink, TableModule, ButtonModule, ToastModule, ConfirmDialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {
  private studentService = inject(StudentService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  studentet: Student[] = [];
  loading = false;

  ngOnInit(): void {
    this.ngarkoStudentet();
  }

  /** GET /api/studentet */
  ngarkoStudentet(): void {
    this.loading = true;
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.studentet = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Gabim',
          detail: 'Nuk u lidh me serverin. A është backend-i aktiv?',
        });
      },
    });
  }

  /** DELETE /api/studentet/:id */
  fshi(student: Student): void {
    this.confirmationService.confirm({
      header: 'Konfirmim',
      message: `A jeni i sigurt që doni të fshini ${student.emri} ${student.mbiemri}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Po',
      rejectLabel: 'Jo',
      accept: () => {
        this.studentService.delete(student.id).subscribe({
          next: () => {
            this.studentet = this.studentet.filter((s) => s.id !== student.id);
            this.messageService.add({ severity: 'success', summary: 'Sukses', detail: 'Studenti u fshi' });
          },
          error: () =>
            this.messageService.add({ severity: 'error', summary: 'Gabim', detail: 'Fshirja dështoi' }),
        });
      },
    });
  }
}
