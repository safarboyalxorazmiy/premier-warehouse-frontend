import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackendapiService } from 'src/app/services/backendapi.service';

@Component({
  selector: 'app-chiqish',
  templateUrl: './chiqish.component.html',
  styleUrls: ['./chiqish.component.css']
})

export class ChiqishComponent implements OnInit {
  constructor(
    public api: BackendapiService, 
    private titleService: Title
  ) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle('Ombordan mahsulot chiqarish');
    document.getElementById('serialInput')?.focus();
  }
}