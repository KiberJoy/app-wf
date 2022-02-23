import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string = '';
  constructor(private httpService: HttpClient) { }

  public requestToken() {
    return this.httpService.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').subscribe((response: any) => {
      this.token = response.token;
    })
  }

  public getToken() {
    return this.token;
  }
}
