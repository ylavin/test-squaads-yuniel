import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

@Input()
export class TableComponent implements OnInit {

  // @Input()
  // dataTable: any[];
  //
  // @Input() columnNameTable: string[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
