import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent {
  @Output() fechar = new EventEmitter<void>();

  dados = {
    nome: '',
    email: '',
    senha: '',
    tipo: '',
    whatsapp: '',
    contatoWhatsapp: false,
    receberCampanhas: false
  };

  enviarCadastro() {
    console.log('Cadastro enviado:', this.dados);
    alert('Cadastro simulado com sucesso!');
    this.fechar.emit();
  }

  fecharModal() {
    this.fechar.emit();
  }
}
