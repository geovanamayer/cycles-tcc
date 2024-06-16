import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit {
  data: any[];

  constructor(private dataService: DataService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      response => {
        this.data = response;
        console.log('Dados recebidos:', this.data);
      },
      error => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}