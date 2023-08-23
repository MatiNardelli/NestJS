import { IsNotEmpty, IsString, isNotEmpty, isString } from 'class-validator';

//@isString() -> esto lo toma mal tiene que tener la I
export class CreateTodoDto {
    
    @IsString()
    @IsNotEmpty()
    description: string;

}
