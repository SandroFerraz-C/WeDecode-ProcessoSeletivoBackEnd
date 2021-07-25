import { Prisma } from "@prisma/client"

export class Espectador implements Prisma.EspectadorUncheckedCreateInput {
  id?: number;
  EspectadorId: number;
  Nome: string;
  Documento: number;
 }
