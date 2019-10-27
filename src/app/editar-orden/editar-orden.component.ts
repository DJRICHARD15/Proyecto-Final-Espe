import { Mensualidad } from './../model/Mensualidad';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.scss']
})
export class EditarOrdenComponent implements OnInit {
  
  editForm: FormGroup;
  id: number;
  mensualidad: Mensualidad;
  
  

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private  mensualidadService: OrdenGastoService) { }
  ngOnInit() {
    this.mensualidad = new Mensualidad();

    this.id = this.route.snapshot.params['id'];
    
    this.mensualidadService.getMensualidad(this.id)
      .subscribe(data => {
        console.log(data)
        this.mensualidad = data;
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
  updateMensualidad() {
    this.mensualidadService.updateMensualidad(this.id, this.mensualidad)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mensualidad = new Mensualidad();
    this.gotoList();
  }

  onSubmit() {
    this.updateMensualidad();    
  }

  gotoList() {
    this.router.navigate(['mensualidades']);
  }
}