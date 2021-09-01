import {Component, Input, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  elementDialog: boolean;
  elements: any[];
  element: any;
  selectedElements: any[];
  submitted: boolean;
  modalTitle: string;

  @Input() dataTable!: any[];

  @Input() columnNameTable!: string[];

  @Input() title!: string;

  @Input() showActions!: boolean;

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) {
    this.elementDialog = false;
    this.elements = [];
    this.element = null;
    this.selectedElements = [];
    this.submitted = false;
    this.modalTitle = ''
  }

  ngOnInit(): void {
    this.elements = this.dataTable;
    console.log(this.columnNameTable);
    this.primengConfig.ripple = true;
  }

  openNew() {
    this.element = {};
    this.submitted = false;
    this.elementDialog = true;
    this.modalTitle = 'Nuevo elemento';
  }

  deleteSelectedElements() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de deseas eliminar el elemento seleccionado?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.elements = this.elements.filter(val => !this.selectedElements.includes(val));
        this.selectedElements = [];
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Elemento eliminado', life: 3000});
      }
    });
  }

  editElement(element: any) {
    this.element = {...element};
    this.elementDialog = true;
    this.modalTitle = 'Editar elemento';
  }

  deleteElement(element: any) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de deseas eliminar el elemento ' + element.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.elements = this.elements.filter(val => val.id !== element.id);
        this.element = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Elemento eliminado', life: 3000});
      }
    });
  }

  hideDialog() {
    this.elementDialog = false;
    this.submitted = false;
  }

  saveElement() {
    this.submitted = true;

    if (this.element.name.trim()) {
      if (this.element.id) {
        this.elements[this.findIndexById(this.element.id)] = this.element;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Elemento actualizado satisfactoriamente',
          life: 3000
        });
      } else {
        this.element.id = this.createId();
        // this.product.image = 'product-placeholder.svg';
        this.elements.push(this.element);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Elemento creado satisfactoriamente',
          life: 3000
        });
      }

      this.elements = [...this.elements];
      this.elementDialog = false;
      this.element = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  viewDetails(element: any) {
    this.router.navigate(['/detail/' + element.id]);
  }
}
