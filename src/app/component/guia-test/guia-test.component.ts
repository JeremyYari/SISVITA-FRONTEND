import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guia-test',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './guia-test.component.html',
  styleUrl: './guia-test.component.css',
})
export class GuiaTestComponent {
  title = 'Guia de Test';
}
