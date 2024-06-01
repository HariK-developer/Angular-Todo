import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/todo/';

  constructor() {}

  async getData(): Promise<Todo[]> {
    const data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async postData(todo: Todo): Promise<Todo> {
    const data = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await data.json())?? todo;
  }
}
