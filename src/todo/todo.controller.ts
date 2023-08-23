import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

//todo es el nombre del recurso -> localhost:3000/recurso

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {} //se inyecta la dependencia de todo service, private xq no se usa fuera de esta clase

  @Post()   //dto: data transfer object -> el body va ser CreateTodoDto
  create(@Body() createTodoDto: CreateTodoDto): Todo {    // con el : Todo especificamos que devuelve un Todo
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {      //PrseIntPipe es para que lea el string como nmber
    //console.log({id, number: 1});   //para ver dif entre string and nmber

    return this.todoService.findOne(id); //+ convierte de string a nmber -> sacamos el + porque Pipe lo hace por nosotros
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number,
         @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.todoService.remove(id);
  }
}
