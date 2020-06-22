import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  data: any = [{
    name: 'Ivan',
    lastName: 'Amorim',
    age: 30
  },
  {
    name: 'Bruna',
    lastName: 'Silva',
    age: 19
  },
  {
    name: 'Kaio',
    lastName: 'Silva',
    age: 23
  }];
  constructor(private excelService:ExcelService){

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
