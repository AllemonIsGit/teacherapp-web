import { LoginDto } from './../dto/loginDto';
import { RegisterDto } from './../dto/registerDto'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static readonly DEFAULT_URL: string = "http://localhost:8080/api/v1/authentication"

  constructor(private httpClient: HttpClient) { }


  public registerUser(registerDto: RegisterDto): Observable<any> {
    return this.httpClient.post(`${AuthenticationService.DEFAULT_URL}/register`, registerDto, { responseType: 'text' })
  }

  public login(loginDto: LoginDto): Observable<any> {
    return this.httpClient.post(`${AuthenticationService.DEFAULT_URL}/login`, loginDto)
  }
}
