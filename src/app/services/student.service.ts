import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private static readonly BASE_URL: string = "http://localhost:8080/api/v1"

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any> {
    const token = localStorage.getItem('accessToken')
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    return this.http.get(StudentService.BASE_URL + "/subjects", { headers })
  }
}
