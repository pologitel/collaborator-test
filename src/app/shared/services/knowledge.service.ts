import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  private apiPath: string = environment.apiPath;

  constructor(
    public http: HttpClient
  ) { }

  public getKnowledge(params: any = {}): Observable<any[]> {
    let endpoint: string = `${this.apiPath}/knowledge-objects`;
    const paramsKeys: string[] = Object.keys(params);

    if (paramsKeys.length > 0) {
      endpoint += '?';

      paramsKeys.forEach((key: string, index: number): void => {
        endpoint += `${key}=${params[key]}${index !== paramsKeys.length ? '$' : ''}`;
      });
    }

    return this.http.get(endpoint)
      .pipe(
        tap((response: any[]) => response)
      );
  }
}
