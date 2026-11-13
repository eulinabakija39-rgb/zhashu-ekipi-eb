export interface Student {
  id: number;
  emri: string;
  mbiemri: string;
  email: string;
}

/** Të dhënat që dërgohen në POST (id e cakton backend-i) */
export type CreateStudentDto = Omit<Student, 'id'>;
