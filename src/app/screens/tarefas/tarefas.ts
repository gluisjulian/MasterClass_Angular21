import { Component, inject } from '@angular/core';
import { Title } from "../../components/shared/title/title";
import { TarefasService } from '../../services/tarefas.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tarefas',
  imports: [Title, MatIconModule
  ],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css',
})
export class Tarefas {
  readonly tarefaService = inject(TarefasService);

  adicionarTarefa(event: Event){

    const inputElement = event.target as HTMLInputElement;

    const title = inputElement.value.trim();
    if(!title) return

    this.tarefaService.add(title);
    inputElement.value = '';

  }
}
