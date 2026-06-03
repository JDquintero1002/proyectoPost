import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario-medico',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-medico.html',
  styleUrl: './formulario-medico.css',
})
export class FormularioMedico {
  nuevoMedico = {
    nombre:''
  }

  constructor(private http:HttpClient){

  }

  guardarMedico(){    
    this.http.post("https://pghrprnrnmeayjnqpeil.supabase.co/rest/v1/medico",
      this.nuevoMedico,
      {
        headers:{
          Authorization:'sb_publishable_rp8sf9fr5ppwIRoN9_rGKw_-Z2aBM53',
          apikey:'sb_publishable_rp8sf9fr5ppwIRoN9_rGKw_-Z2aBM53',
          "Content-type":'application/json'
        }
      }
    ).subscribe(
      {
        next:(respuesta)=>{
          alert("medico guardado"+respuesta)
        }
      }
    )
  }
}
