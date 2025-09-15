import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private apiUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap((res) => {
        localStorage.setItem('authToken', res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
