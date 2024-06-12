import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa o FormGroup com campos e validações
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      advice: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Imprime os valores do formulário no console
      console.log('Form Submitted', this.contactForm.value);
      // Reseta o formulário após a submissão
      this.contactForm.reset();
    }
  }
}
