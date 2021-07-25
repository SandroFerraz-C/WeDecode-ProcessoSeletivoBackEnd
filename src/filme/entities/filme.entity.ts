import { Prisma } from "@prisma/client"

export class Filme implements Prisma.FilmsUncheckedCreateInput {
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
