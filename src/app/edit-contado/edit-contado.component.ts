import { Contado } from './../model/Contado';
import { PagoService } from './../services/Pago.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contado',
  templateUrl: './edit-contado.component.html',
  styleUrls: ['./edit-contado.component.scss']
})
export class EditContadoComponent implements OnInit {
 
  editForm: FormGroup;
  id: number;
  contado: Contado;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private  contadoService: PagoService) { }

  ngOnInit() {
    this.contado = new Contado();

    this.id = this.route.snapshot.params['id'];
    
    this.contadoService.getContado(this.id)
      .subscribe(data => {
        console.log(data)
        this.contado = data;
      }, error => console.log(error));

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
  updateContado() {
    this.contadoService.updateContado(this.id, this.contado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contado = new Contado();
    this.gotoList();
  }

  onSubmit() {
    this.updateContado();    
  }

  gotoList() {
    this.router.navigate(['contado']);
  }
}
