import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateStudentDto, Student } from '../models/student.model';

/**
 * Service-i i vetëm që komunikon me backend-in për studentët.
 * Komponentet NUK thërrasin HttpClient direkt — gjithmonë përmes service-it.
 */
@Injectable({ providedIn: 'root' })
export class StudentService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/studentet`;

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  create(student: CreateStudentDto): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
