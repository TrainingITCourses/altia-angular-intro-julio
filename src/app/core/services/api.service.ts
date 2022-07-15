import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyType } from '../models/agency.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000/agencies';
  constructor(private http: HttpClient) {}

  public getAgencies() {
    return this.http.get<AgencyType[]>(this.url);
  }

  public getAgencyById(agencyId: string) {
    return this.http.get<AgencyType>(`${this.url}/${agencyId}`);
  }

  public postAgency(agency: AgencyType) {
    return this.http.post<AgencyType>(this.url, agency);
  }
}
