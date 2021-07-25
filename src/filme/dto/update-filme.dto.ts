import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmeDto } from './create-filme.dto';

//Informing what data exists to update a movie
export class UpdateFilmeDto extends PartialType(CreateFilmeDto) {}
