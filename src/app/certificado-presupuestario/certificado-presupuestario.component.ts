import { HttpClient } from '@angular/common/http';
import { CertificadoPresupuestarioService } from './../services/CertificadoPresupuestario.service';
import { CertificadoPresupuestario } from './../model/CertificadoPresupuestario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-certificado-presupuestario',
  templateUrl: './certificado-presupuestario.component.html',
  styleUrls: ['./certificado-presupuestario.component.scss']
})
export class CertificadoPresupuestarioComponent implements OnInit {
  CertificadoPresupuestarioService:any;
  certificadoPresupuestario: CertificadoPresupuestario;
  date:Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private certificadoPresupuestarioDataService: CertificadoPresupuestarioService,
  ) { }

  ngOnInit() {
    this.certificadoPresupuestario = new CertificadoPresupuestario();
  }
  crearOActualizarCertificado(certificadoPresupuestario: CertificadoPresupuestario) {
    this.certificadoPresupuestarioDataService.crearOActualizarCertificado(this.certificadoPresupuestario)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['cancelar']);
      alert( 'enviado' );
    });
}
}
