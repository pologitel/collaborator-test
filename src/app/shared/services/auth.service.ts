import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface IDataAuth {
  login: string;
  password: string;
}

interface IDataResponseAuth {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiPath: string = environment.apiPath;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    public http: HttpClient,
    public window: Window
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(this.window.localStorage.getItem('currentUserInfo'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public auth(data: IDataAuth): Observable<IDataResponseAuth> {
    return this.http.post(`${this.apiPath}/auth`, data)
      .pipe(
        tap((response: IDataResponseAuth): any => {
          this.window.localStorage.setItem('currentUserInfo', JSON.stringify(response));
          this.currentUserSubject.next(response);
          return response;
        })
      )
  }

  public logout(): Observable<any> {
    this.window.localStorage.removeItem('currentUserInfo');
    this.currentUserSubject.next(null);

    return of({
      status: 'Logout'
    });
  }
}
