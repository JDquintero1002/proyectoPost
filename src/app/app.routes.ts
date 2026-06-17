import { Routes } from '@angular/router';
import { FormularioMedico } from './formulario-medico/formulario-medico';
import { ListarMedico } from './listar-medico/listar-medico';
import { ActualizarMedico } from './actualizar-medico/actualizar-medico';

export const routes: Routes = [
    {
        path:'medicos',
        component:FormularioMedico
    },
    {
        path:'listadoMedico',
        component:ListarMedico
    },
    {
        path:'actualizarMedico/:id',
        component:ActualizarMedico
    }
];
