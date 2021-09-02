import {Component, Input, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Router} from "@angular/router";
import {LeagueService} from "../../services/leagueService";
import {TeamService} from "../../services/teamService";
import {PlayerService} from "../../services/playerService";
import {Team} from "../../models/team";
import {League} from "../../models/league";
import {Player} from "../../models/player";

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
  teams: any[];
  leagues: any[];
  // team: string;

  @Input() dataTable!: any[];

  @Input() columnNameTable!: string[];

  @Input() title!: string;

  @Input() showActions!: boolean;

  @Input() playerService!: PlayerService;
  @Input() teamService!: TeamService;
  @Input() leaguesService!: LeagueService;

  @Input() multiselect!: boolean

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) {
    this.elementDialog = false;
    this.elements = [];
    this.element = null;
    this.selectedElements = [];
    this.submitted = false;
    this.modalTitle = ''
    // this.team = '';
    this.teams = [];
    this.leagues = [];
  }

  ngOnInit(): void {
    this.elements = this.dataTable;
    this.primengConfig.ripple = true;
    this.getAllTeams();
    this.getAllLeagues();
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
        this.messageService.add({severity: 'success', summary: '', detail: 'Elemento eliminado', life: 3000});
      }
    });
  }

  editElement(element: any) {
    this.element = {...element};
    this.elementDialog = true;
    this.modalTitle = 'Editar elemento';
  }

  deleteElement(element: any) {
    let isSuccess = false;
    this.confirmationService.confirm({
      message: '¿Estás seguro de deseas eliminar el elemento ' + element.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.title === 'Equipos') {
          this.teamService.deleteById(element.id).subscribe(response => {
            isSuccess = this.processResponse(response, 'delete');
            if (isSuccess) {
              this.getDataTableAfterSuccess();
              this.element = {};
            }
          })
        }
      }
    });
  }

  hideDialog() {
    this.elementDialog = false;
    this.submitted = false;
  }

  saveElement() {
    this.submitted = true;
    let isSuccess = false;
    if (this.element.name.trim()) {
      if (this.element.id) {
        if (this.title === 'Equipos') {
          this.teamService.update(this.element, this.element.id).subscribe(response => {
            isSuccess = this.processResponse(response, 'update');
            if (isSuccess) {
              this.getDataTableAfterSuccess();
            }
          });
        }
      } else {
        if (this.title === 'Equipos') {
          this.element.id = this.createId();
          this.teamService.create(this.element).subscribe(response => {
            isSuccess = this.processResponse(response, 'create');
            if (isSuccess) {
              this.getDataTableAfterSuccess();
            }
          });
        }
        // this.element.id = this.createId();
        // this.elements.push(this.element);
        // this.messageService.add({
        //   severity: 'success',
        //   summary: '',
        //   detail: 'Elemento creado satisfactoriamente',
        //   life: 3000
        // });
      }

      this.elements = [...this.elements];
      this.elementDialog = false;
      this.element = {};
    }
  }

  processResponse(res: any, type: string): boolean {
    let isValid = true;
    if (res && type === 'create') {
      this.messageService.add({
        severity: 'success',
        summary: '',
        detail: 'Elemento creado satisfactoriamente',
        life: 3000
      });
    } else if (res && type === 'update') {
      this.messageService.add({
        severity: 'success',
        summary: '',
        detail: 'Elemento actualizado satisfactoriamente',
        life: 3000
      });
    } else if (res && type === 'delete') {
      this.messageService.add({severity: 'success', summary: '', detail: 'Elemento eliminado', life: 3000});

    } else {
      this.messageService.add({
        severity: 'error',
        summary: '',
        detail: 'Ha ocurrido un error',
        life: 3000
      });
      isValid = false;
    }
    return isValid
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

  getTeamById(id: any) {
    this.playerService.getTeamById(id).subscribe(response => {
      return response
    });
  }

  getTeamForSelect() {
    let options: any[] = [];
    this.teams.forEach(value => {
      options.push({label: value.name, value: value.id})
    });
    return options;
  }

  getLeagueForSelect() {
    let options: any[] = [];
    this.leagues.forEach(value => {
      options.push({label: value.name, value: value.id})
    });
    return options;
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(response => {
      this.teams = response as Team[]
    });
  }

  getAllLeagues() {
    this.leaguesService.getAllLeagues().subscribe(response => {
      this.leagues = response as League[]
    });
  }

  getDataTableAfterSuccess() {
    if (this.title === 'Equipos') {
      this.teamService.getAllTeams().subscribe(response => {
        this.elements = response as Team[]
      });
    } else if (this.title === 'Jugadores') {
      this.playerService.getAllPlayers().subscribe(response => {
        this.elements = response as Player[]
      });
    }
  }
}


