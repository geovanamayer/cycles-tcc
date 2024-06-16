import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o módulo de teste do HttpClient

import { ContactFormComponent } from './contact-form.component';
import { ContactService } from 'src/contact.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule], // Adicione o HttpClientTestingModule
      declarations: [ContactFormComponent],
      providers: [ContactService] // Forneça o ContactService
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
