import { Prisma } from "@prisma/client";
import { IsString, IsOptional } from "class-validator";

//Informing what data exists for the creation of a new "movie"
export class CreateFilmeDto{ /*It is recommended to use a DTO because in some cases it is not good to allow the creation of some
   fields via API, as it may have a sensitive field or some field that is necessary to analyze before, the DTO protects this. */
   
  @IsString()  //Says you can only input string data.
  Filme: string;

  @IsString()  //Says you can only input string data.
  Genero: string;

  @IsString()  //Says you can only input string data.
  DataDeLancamento: string;

  @IsString()  //Says you can only input string data.
  Classificacao: string;

  @IsString()  //Says you can only input string data.
  TempoDeFilme: string;

  @IsString()  //Says you can only input string data.
  Diretor: string;

  @IsString()  //Says you can only input string data.
  Orcamento: string;

  @IsOptional() //It says that the field to add a viewer is optional, as a movie can have no viewers at the time of its release.
  EspectadorFilmes: Prisma.EspectadorUncheckedCreateNestedManyWithoutEspectadorFilmesInput;

}
