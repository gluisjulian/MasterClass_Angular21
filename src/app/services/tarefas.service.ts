import { effect, Injectable, signal } from '@angular/core';
import { Tarefas } from '../model/tarefa.entity';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private readonly _items = signal<Array<Tarefas>>([]);

  constructor(){
    this._load();

    // effect(() => {
    //   const items = this._load();
    //   localStorage.setItem('tarefas', JSON.stringify(items));
    // });
  }

  readonly items = this._items.asReadonly();

  add(title: string){
    const novaTarefa: Tarefas = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    this._items.update((items) => [...items, novaTarefa]);
  }

  toggle(id: string){
    this._items.update((items) =>
      items.map((item) =>
      item.id == id ? {...item, completed: !item.completed}: item)
    );
  }

  remove(id: string){
    this._items.update((items) => items.filter((item) => item.id !== id))
  }

  private _load(){
    const storedTarefas = localStorage.getItem('tarefas');

    if(storedTarefas){
      this._items.set(JSON.parse(storedTarefas));
    }else
    {
      this._items.set([
        {id: crypto.randomUUID(), title: 'Implementar App Mobile', completed: false},
        {id: crypto.randomUUID(), title: 'Estudar Angular Avançado', completed: true},
        {id: crypto.randomUUID(), title: 'Revisar Codig do Projeto', completed: false}
      ]);
    }
  }
}
