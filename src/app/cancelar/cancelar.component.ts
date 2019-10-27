import { OrdenGastoService } from './../services/OrdenGasto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensualidad } from './../model/Mensualidad';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


 declare var jquery: any;
 declare var $: any;

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
})
export class CancelarComponent implements OnInit {

  mensualidad: Mensualidad = new Mensualidad();
  submitted = false;
   editForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private mensualidadService: OrdenGastoService
  ) {}

  ngOnInit() {
     this.editForm = this.formBuilder.group({      
       Descripcion:  [Validators.required, Validators.pattern('')],
       horaFech:  [Validators.required, Validators.pattern('')],
       ObjetoContrato:  [Validators.required, Validators.pattern('')],
       Orden:  [Validators.required, Validators.pattern('^[0-9]{0,1}$')],
       Valor: [Validators.required, Validators.pattern('^[0-9]{1,5}$')],
       Cantidad: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
       precioUnitario: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
       //PreUni: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
       Iva: [Validators.required, Validators.pattern('^(0.12)$')],
       OtrImp: [Validators.required, Validators.pattern('^[0-9]{1,4}.[0-9]{1,2}$')],
       mesDia: [Validators.required, Validators.pattern('[1-9]{1,2}$')],
       numeroContratoE:  [Validators.required, Validators.pattern('^[0-99999]{0,9}$')],
       NombreContratist:[Validators.required, Validators.pattern('[A-ZÑ]{3,30} [A-ZÑ]{3,30}')],
       RucContratista:[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{12})')]
   }); 

  }

newMensualidad(): void {
  this.submitted = false;
  this.mensualidad = new Mensualidad();
}

save() {
  this.mensualidadService.createMensualidad(this.mensualidad)
    .subscribe(data => console.log(data), error => console.log(error));
  this.mensualidad = new Mensualidad();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['mensualidades']);
}
  
  formatsDateTest: string[] = [
    'yyyy/MM/dd'
    ];
  
  dateNow : Date = new Date();

}
