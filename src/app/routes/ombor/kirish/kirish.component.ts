import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendapiService } from 'src/app/services/backendapi.service';

@Component({
  selector: 'app-kirish',
  templateUrl: './kirish.component.html',
  styleUrls: ['./kirish.component.css']
})

export class KirishComponent implements OnInit {
  serialValue: any;
  lastSeria: any;
  count: any = 0;
  
  constructor(public api: BackendapiService, private titleService: Title) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Omborga mahsulot kiritish');
    document.getElementById('serialInput')?.focus();

    this.count = await this.api.getCount();
  }

  async submitSeria() {
    if (this.serialValue.length >= 15){
      if (this.serialValue == this.lastSeria) {
        this.serialValue = "";
        return;
      }

      this.api.submitSerial(this.serialValue);
      this.lastSeria = this.serialValue;

      console.log(this.serialValue)
      this.serialValue = "";
      this.count = await this.api.getCount();
    }
  }
}