import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: TodoComponent,
      },
    {
        path: 'contact',
        title: 'Contact',
        component: ContactComponent,
      },
];
