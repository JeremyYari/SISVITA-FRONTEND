import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Paciente } from '../../model/Paciente';
import { PacienteService } from '../../service/Paciente.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css',
})
export class RegistrarPacienteComponent {
  title = 'Registro de Paciente';
}
