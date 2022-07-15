import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000/agencies';
  constructor(private http: HttpClient) {}

  public getAgencies() {
    return this.http.get<any[]>(this.url);
  }

  public getAgencyById(agencyId: string) {
    return this.http.get<any>(`${this.url}/${agencyId}`);
  }

  public postAgency(agency: any) {
    return this.http.post<any>(this.url, agency);
  }
}
