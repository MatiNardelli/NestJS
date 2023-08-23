import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    {id: 1, description: 'Piedra del Alma', done:false},
    {id: 2, description: 'Piedra del Tiempo', done:false},
    {id: 3, description: 'Piedra del Espacio', done:true},
  ];

  create({description}: CreateTodoDto) {

    const todo = new Todo();    //viene de la base de datos
    todo.id=Math.max(...this.todos.map(todo => todo.id), 0 ) +1;  //arreglo de todo pido el maximo sino valor es cero y el producto le sumo +1
    todo.description=description;

    this.todos.push( todo )     //añado el todo
    
    //console.log(createTodoDto);     //imprimo en consola de backend

    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
    //return `This action returns all todo`;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find( todo => todo.id === id);

    if (!todo) throw new NotFoundException(`TODO with #${id} not found`)

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {

    const{done,description} = updateTodoDto;  //desestructuro
    const todo = this.findOne(id);  //si pasa este metodo tenmos un Todo

    if(done !== undefined) todo.done=done;  //usamos undefine y no != porque puede ser falso
    if (description) todo.description = description;

    this.todos = this.todos.map( dbTodo => {

      if (dbTodo.id === id) return todo;

      return dbTodo;
    })
    return todo;
    
  }

  remove(id: number) {

    this.findOne(id);  //solo lo mando a llamar no asigno espacio memoria con const
    
    this.todos = this.todos.filter(todo=>todo.id !== id);
    
  }
}
