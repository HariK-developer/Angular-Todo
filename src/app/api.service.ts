import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/todo/';

  constructor() {}

  async getTodo(): Promise<Todo[]> {
    const data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async createTodo(todo: Todo): Promise<Todo> {
    const data = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await data.json())?? todo;
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    const url = `${this.apiUrl}${todo.id}`; // Assuming this.apiUrl is the base URL
  
    const data = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return (await data.json()) ?? todo;
  }
  
}
