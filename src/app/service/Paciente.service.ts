import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getConexionBackend } from '../utils/constants';
import { Paciente } from '../model/Paciente';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  BASE_URL: string | undefined;

  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
    //console.log(this.BASE_URL);
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.BASE_URL}/persona/listar`);
  }
  registrarPaciente(form: any) {
    return this.http.post(`${this.BASE_URL}/persona/insert`, form);
  }
  //agregado para soporte flask
  actualizarPaciente(form: any) {
    return this.http.post(`${this.BASE_URL}/persona/update`, form);
  }

  eliminarPaciente(paciente: Paciente) {
    return this.http.delete(`${this.BASE_URL}/persona/delete`, {
      body: paciente,
    });
  }
}
