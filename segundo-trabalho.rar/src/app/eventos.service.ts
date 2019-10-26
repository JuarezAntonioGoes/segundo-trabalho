import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Evento } from './evento';

const httpOption = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }

  save(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.url, evento, httpOption);
  }

  edit(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(this.url + '/' + evento.id, evento, httpOption);
  }

  delete(evento: Evento): Observable<Evento> {
    return this.http.delete<Evento>(this.url + '/' + evento.id);
  }
}
