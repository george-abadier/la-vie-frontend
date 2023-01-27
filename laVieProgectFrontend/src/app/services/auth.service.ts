import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiInterface } from '../interfaces/api-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        // "Content-Type":""
      })
    }
  }
  private handleError(e: HttpErrorResponse) {
    if(e.status===0){
      console.log('frontend error',e)
    }else{
      console.log('backend error',e)
    }
    return throwError(() => new Error('something wrong'))
  }
  login(userType: string, userLoginObject: object, method?: string): Observable<ApiInterface> {
    // localStorage.setItem('token','abc')
    console.log(userLoginObject)
    if (userType == 'user') {
      if (method == 'normal') {
        return this.httpClient.post<ApiInterface>(`${environment.apiBaseURL}/lavie/login`, JSON.stringify(userLoginObject)).pipe(
          retry(2),
          catchError(this.handleError)
        )
      } else if (method == 'facebook') {
        return this.httpClient.get<ApiInterface>(`${environment.apiBaseURL}/lavie/facebooklogin`).pipe(
          retry(2),
          catchError(this.handleError)
        )
      } else if (method == 'google') {
        return this.httpClient.get<ApiInterface>(`${environment.apiBaseURL}/lavie/googlelogin`).pipe(
          retry(2),
          catchError(this.handleError)
        )
      }
    }
    return this.httpClient.post<ApiInterface>(`${environment.apiBaseURL}/lavie/employee/login`, JSON.stringify(userLoginObject)).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  logout():Observable<ApiInterface> {
    localStorage.removeItem('token')
    return this.httpClient.put<ApiInterface>(`${environment.apiBaseURL}/lavie/employee/login`, {}).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  get islogged(): boolean {
    return localStorage.getItem('token') ? true : false
  }
}
