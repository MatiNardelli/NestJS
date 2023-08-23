import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {

    @IsBoolean()
    @IsOptional()
    done?: boolean; //defino que es tipo boolean -> true/false

}    //extend hereda todo lo que tiene el creeateTodoDto

