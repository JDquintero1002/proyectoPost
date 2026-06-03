import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioMedico } from './formulario-medico/formulario-medico';
import { ListarMedico } from './listar-medico/listar-medico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormularioMedico,ListarMedico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectPost');
}
