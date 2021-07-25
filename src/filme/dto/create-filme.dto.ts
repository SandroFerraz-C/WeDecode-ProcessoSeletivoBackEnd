import { Prisma } from "@prisma/client";
import { IsString, IsOptional } from "class-validator";

export class CreateFilmeDto{
  @IsString()
  Filme: string;

  @IsString()
  Genero: string;

  @IsString()
  DataDeLancamento: string;

  @IsString()
  Classificacao: string;

  @IsString()
  TempoDeFilme: string;

  @IsString()
  Diretor: string;

  @IsString()
  Orcamento: string;

  @IsOptional()
  EspectadorFilmes: Prisma.EspectadorUncheckedCreateNestedManyWithoutEspectadorFilmesInput;

}
