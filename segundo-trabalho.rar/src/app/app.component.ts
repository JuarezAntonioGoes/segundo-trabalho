import { EventosService } from './eventos.service';
import { Evento } from './evento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'segundo-trabalho';

  newEvento: Evento;
  eventos: Evento[] = [];

  constructor(
    private eventoService: EventosService
  ) { }

  ngOnInit() {
    this.newEvento = new Evento();
    this.getAll();
  }

  getAll() {
    this.eventoService.getAll().subscribe(
      data => this.eventos = data
    );
  }

  save() {
    if (!this.newEvento.id) {
      this.eventoService.save(this.newEvento).subscribe(
        data => this.getAll()
      );
    } else {
      this.eventoService.edit(this.newEvento).subscribe(
        data => this.getAll()
      );
    }
  }

  edit(evento: Evento) {
    this.newEvento = new Evento(evento.id, evento.titulo, evento.nome);
  }

  delete(evento: Evento) {
    this.eventoService.delete(evento).subscribe(
      data => this.getAll()
    );
  }
}
