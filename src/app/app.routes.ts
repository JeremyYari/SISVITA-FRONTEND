import { Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { RegistrarPacienteComponent } from './component/registrar-paciente/registrar-paciente.component';
import { GuiaTestComponent } from './component/guia-test/guia-test.component';
import { TestAnsiedadComponent } from './component/test-ansiedad/test-ansiedad.component';

export const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
  { path: 'principal', component: PrincipalComponent },
  { path: 'registrar-paciente', component: RegistrarPacienteComponent },
  { path: 'guia-test', component: GuiaTestComponent },
  { path: 'test-ansiedad', component: TestAnsiedadComponent }
];
