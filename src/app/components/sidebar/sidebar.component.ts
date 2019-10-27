import { OrdenGastoService } from './../../services/OrdenGasto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
declare const $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MessageService]
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private router: Router, private messageService: MessageService,
        private ordenGastoService: OrdenGastoService) {
      
    }

    ngOnInit() {
        this.getmenu();
    }
    
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    
    getmenu() {
        this.ordenGastoService.findDataUser('L00328007').subscribe(
            data => {
                this.menuItems = Array.from(
                    new Set(data.opciones.map(x => x.opcion))
                ).map(datos => {
                    return {
                        opcion: data.opciones.find(s => s.opcion === datos).opcion,
                        url: data.opciones.find(s => s.opcion === datos).url,
                        icono: data.opciones.find(s => s.opcion === datos).icono,
                        clase: data.opciones.find(s => s.opcion === datos).clase
                    };
                });
            },
            error => {
                console.log(error);
            }
        );
    }

}
