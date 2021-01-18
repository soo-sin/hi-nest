import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//이렇게 하면 createMovieDto와 같아짐
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
