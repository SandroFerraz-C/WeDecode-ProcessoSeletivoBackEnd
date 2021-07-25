import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private readonly prisma: PrismaService){}

  create(data: CreateFilmeDto) {
    return this.prisma.films.create({
      data,
    include:{
      EspectadorFilmes: true,
    }
  });
  }

  findAll() {
    return this.prisma.films.findMany({
      include:{
        EspectadorFilmes: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.films.findUnique({
      where:{id},
      include:{
        EspectadorFilmes: true,
      }
    });
  }

  update(id: number, data: UpdateFilmeDto) {
    return this.prisma.films.update({
      where:{id},
      data,
      include:{
        EspectadorFilmes: true,
      }
    });
    }

  remove(id: number) {
    return this.prisma.films.delete({
      where:{id}
    });
  }
}
