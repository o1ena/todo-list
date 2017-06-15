import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TodosFilterPipe } from './components/todo-filter/todos-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodosFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
