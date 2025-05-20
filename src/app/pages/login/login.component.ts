import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, senha } = this.loginForm.value;

    if (email === 'admin@teste.com' && senha === '123') {
      this.router.navigate(['/painel-admin']);
    } else if (email === 'cliente@teste.com' && senha === '123') {
      this.router.navigate(['/painel-cliente']);
    } else if (email === 'parceiro@teste.com' && senha === '123') {
      this.router.navigate(['/painel-parceiro']);
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }
}
