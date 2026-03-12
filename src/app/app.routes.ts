import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Contador } from './screens/contador/contador';
import { CalculadoraComponent } from './screens/calculadora/calculadora.component';

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
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    //Carrega rota LAZY LOAD
    path: 'tarefas',
    loadComponent(){
      return import('./screens/tarefas/tarefas').then((t) => t.Tarefas);
    }
  }
];
