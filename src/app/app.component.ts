import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ModalCadastroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msh-site';

  mostrarCadastro = false; // <- Controla a exibição do modal
}
