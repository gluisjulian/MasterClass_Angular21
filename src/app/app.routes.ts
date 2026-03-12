import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Contador } from './screens/contador/contador';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'contador',
    component: Contador
  },
  {
    //Carrega rota LAZY LOAD
    path: 'tarefas',
    loadComponent(){
      return import('./screens/tarefas/tarefas').then((t) => t.Tarefas);
    }
  }
];
