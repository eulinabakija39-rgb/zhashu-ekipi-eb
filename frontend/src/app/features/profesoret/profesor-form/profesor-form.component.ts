import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-profesor-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, ButtonModule, MessageModule],
  templateUrl: './profesor-form.component.html',
  styleUrl: './profesor-form.component.scss'
})
export class ProfesorFormComponent {
  private formBuilder = inject(FormBuilder);
  errorMessage ='';
  saving:boolean = false;

  formProfesori = this.formBuilder.group({
    emri:['emer', {disabled:true} ],
    mbiemri:[],
    email:[],
  })


  ruaj():string{
    return 'Ruaj';
  }

  invalid(field: 'emri' | 'mbiemri' | 'email'): boolean {
    const control = this.formProfesori.controls[field];
    return control.invalid && control.touched;
  }

}
