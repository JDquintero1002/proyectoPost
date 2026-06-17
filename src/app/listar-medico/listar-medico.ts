import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface Medico{
  id:string
  nombre:string
}

@Component({
  selector: 'app-listar-medico',
  imports: [CommonModule,RouterLink],
  templateUrl: './listar-medico.html',
  styleUrl: './listar-medico.css',
})
export class ListarMedico {
  medicos:Medico[]=[]
  constructor(private http:HttpClient, private cdr:ChangeDetectorRef){
    
  }
  ngOnInit(){
      this.traerMedicos()
    }
    traerMedicos(){
      this.http.get<Medico[]>('https://pghrprnrnmeayjnqpeil.supabase.co/rest/v1/medico',{
        headers:{
          Authorization:'sb_publishable_rp8sf9fr5ppwIRoN9_rGKw_-Z2aBM53',
          apikey:'sb_publishable_rp8sf9fr5ppwIRoN9_rGKw_-Z2aBM53',
          "Content-type":'application/json'
        }
      }).subscribe(
        {
            next:(respuesta)=>{
              console.log(respuesta);
              if(respuesta.length>0){
                this.medicos=respuesta
              }
              this.cdr.detectChanges();
            }
        }
      )
    }
}
