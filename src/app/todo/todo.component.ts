import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'], // Corrected to styleUrls
})
export class TodoComponent implements OnInit {
  // Implement OnInit interface
  todoList: Array<Todo> = [];
  applyForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.applyForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      completed: new FormControl(false), // Initial value set to false
    });
  }

  ngOnInit() {
    this.apiService
      .getTodo()
      .then((todo: Todo[]) => {
        this.todoList = todo;
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  }

  createTodo() {
    if (this.applyForm.valid) {
      const todo: Todo = {
        title: this.applyForm.value.title ?? '',
        description: this.applyForm.value.description ?? '',
        completed: this.applyForm.value.completed ?? false,
      };

      this.apiService
        .createTodo(todo)
        .then((createdTodo) => {
          console.log('Todo created:', createdTodo);
          this.ngOnInit();
          this.applyForm.reset(); // Reset the form after successful creation
          alert('Todo created');
        })
        .catch((error) => {
          console.error('Error creating todo:', error);
          alert(error.message);
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  updateTodo(todo: Todo,completed?: boolean) {
    todo.completed = completed;
    this.apiService
      .updateTodo(todo)
      .then((updatedTodo) => {
        console.log('Todo updated:', updatedTodo);
        this.ngOnInit();
        alert('Todo updated successfully');
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
        alert(error.message);
      });
  }
}
