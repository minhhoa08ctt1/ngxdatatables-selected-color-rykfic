import { Component } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import companyData from '../assets/data/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-theming';

  rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name'} ,
    { name: 'Company' },
    { name: 'Gender' }
  ];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() {
    this.rows = companyData;
    this.selected = [companyData[2]];
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
