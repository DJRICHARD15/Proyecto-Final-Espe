import { EditarOrdenComponent } from './../../editar-orden/editar-orden.component';
import { HistorialComponent } from './../../historial/historial.component';
import { ContratoComponent } from './../../contrato/contrato.component';
import { ProveedorComponent } from './../../proveedor/proveedor.component';
import { Routes } from '@angular/router';
import { InicioComponent } from '../../inicio/inicio.component';
import { CancelarComponent } from 'app/cancelar/cancelar.component';
import { DatosEmpleadoComponent } from 'app/datos-empleado/datos-empleado.component';
import { PagoComponent } from '../../pago/pago.component';
import { UnpagoComponent } from 'app/unpago/unpago.component';
import { DetalleComponent } from 'app/detalle/detalle.component';
import { EditContadoComponent } from 'app/edit-contado/edit-contado.component';
import { DetalleContadoComponent } from 'app/detalle-contado/detalle-contado.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: 'inicio', pathMatch:'full' },
    //mensualidad     
    { path: 'mensualidades', component: ProveedorComponent},//vista
    { path: 'add-mensualidad', component: CancelarComponent },//add
    { path: 'editar/:id', component: EditarOrdenComponent},//edit
    { path: 'detalle/:id', component: DetalleComponent},//details
    //un pago
    { path: 'contado', component: UnpagoComponent},//vista
    { path: 'add-contado', component: PagoComponent},//add
    { path: 'editar-contado/:id', component: EditContadoComponent},//edit
    { path: 'detalle-contado/:id', component: DetalleContadoComponent},//details

    
    { path: 'datosEmpleado', component: DatosEmpleadoComponent},
    { path: 'contrato', component: ContratoComponent},
    
];
