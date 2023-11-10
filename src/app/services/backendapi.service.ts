import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config/config'

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  constructor(public server: ConfigService, public http: HttpClient) { }

  
  public async submitSerial(seria: any){
    return new Promise<any>((resolve) => {
      this.http.post<any>(this.server.ServerName + '/api/v1/warehouse/create?serial=' + seria, [])
      .subscribe(e=>{
          resolve(e);
        })
    })
  }

  public getWarehouseInfo(): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      this.http.get<any[]>(this.server.ServerName + '/api/v1/warehouse/get/all')
      .subscribe(e=>{
        resolve(e);
      })
    });
  }

  public getCount(): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      this.http.get<any[]>(this.server.ServerName + '/api/v1/warehouse/get/count')
      .subscribe(e=>{
        resolve(e);
      })
    });
  }
}
