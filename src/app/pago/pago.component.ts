import { PagoService } from './../services/Pago.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contado } from './../model/Contado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  editForm: FormGroup;
  contado: Contado = new Contado();
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private contadoService: PagoService
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
      PreUni: [Validators.required, Validators.pattern('^[0-9]{0,5}$')],
      Iva: [Validators.required, Validators.pattern('^(0.12)$')],
      OtrImp: [Validators.required, Validators.pattern('^[0-9]{1,4}.[0-9]{1,2}$')],
      mesDia: [Validators.required, Validators.pattern('[1-9]{1,2}$')],
      numeroContratoE:  [Validators.required, Validators.pattern('^[0-99999]{0,9}$')],
      NombreContratist:[Validators.required, Validators.pattern('[A-ZÑ]{3,30} [A-ZÑ]{3,30}')],
      RucContratista:[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{12})')]
  }); 

  }
    
newContado(): void {
  this.submitted = false;
  this.contado = new Contado();
}

save() {
  this.contadoService.createContado(this.contado)
    .subscribe(data => console.log(data), error => console.log(error));
  this.contado = new Contado();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['contado']);
}
  
  formatsDateTest: string[] = [
    'yyyy/MM/dd'
    ];
  
  dateNow : Date = new Date();

}
