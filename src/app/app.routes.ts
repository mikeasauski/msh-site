import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AluguelMaquinasComponent } from './pages/aluguel-maquinas/aluguel-maquinas.component';
import { OrcamentoOnlineComponent } from './pages/orcamento-online/orcamento-online.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelAdminComponent } from './pages/painel-admin/painel-admin.component';
import { PainelClienteComponent } from './pages/painel-cliente/painel-cliente.component';
import { PainelParceiroComponent } from './pages/painel-parceiro/painel-parceiro.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redireciona a raiz para /home
    { path: 'home', component: HomeComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'aluguel-maquinas', component: AluguelMaquinasComponent },
    { path: 'orcamento-online', component: OrcamentoOnlineComponent },
    { path: 'login', component: LoginComponent },
    { path: 'painel-admin', component: PainelAdminComponent },
    { path: 'painel-cliente', component: PainelClienteComponent },
    { path: 'painel-parceiro', component: PainelParceiroComponent }
];
