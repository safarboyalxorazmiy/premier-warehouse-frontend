import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendapiService } from 'src/app/services/backendapi.service';

@Component({
  selector: 'app-ombor',
  templateUrl: './ombor.component.html',
  styleUrls: ['./ombor.component.css']
})

export class OmborComponent implements OnInit {
  warehouseInfo: any = [];
  intervalId: any;

  constructor(public api: BackendapiService, private titleService: Title) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Ombordan mahsulot chiqarish');
    document.getElementById('serialInput')?.focus();

    /*this.intervalId = setInterval(() => {
      this.getWarehouseInfo();

      console.log(this.warehouseInfo)
    }, 1000);*/
    this.getWarehouseInfo();


  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  async getWarehouseInfo() {
    this.warehouseInfo = await this.api.getWarehouseInfo();
  }
}