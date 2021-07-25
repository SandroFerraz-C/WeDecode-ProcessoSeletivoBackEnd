import { Prisma } from "@prisma/client"

//Add data that the movies entity has
export class Filme implements Prisma.FilmsUncheckedCreateInput { /*Here I used Unchecked because it has the ID information, and for 
  the entity this will be necessary */
  
  id?: number;
  Filme: string;
  Genero: string;
  DataDeLancamento: string;
  Classificacao: string;
  TempoDeFilme: string;
  Diretor: string;
  Orcamento: string;
  EspectadorFilmes?: Prisma.EspectadorUncheckedCreateNestedManyWithoutEspectadorFilmesInput;
}
