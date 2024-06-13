import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-ansiedad',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './test-ansiedad.component.html',
  styleUrl: './test-ansiedad.component.css',
})
export class TestAnsiedadComponent {
  title = 'Test de Ansiedad';
}
