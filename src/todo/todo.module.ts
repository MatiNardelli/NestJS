import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],  //escucha solicitud y emite respuesta
  providers: [TodoService],       //maneja la logica de negocio de aplicacion -> tarea pendientes completadas etc
})
export class TodoModule {}
