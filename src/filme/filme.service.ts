import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private readonly prisma: PrismaService){} //Along this line, NestJS injects an instance of prism service

   //Service with CRUD options
 

   //Creating a Movie
  create(data: CreateFilmeDto) {
    return this.prisma.films.create({
      data,
    include:{
      EspectadorFilmes: true,
    }
  });
  }

  //Views of all registered movies
  findAll() {
    return this.prisma.films.findMany({
      include:{
        EspectadorFilmes: true,
      }
    });
  }

  //Movie views by ID
  findOne (id: number) {
    return this.prisma.films.findUnique({
      where:{id},
      include:{
        EspectadorFilmes: true,
      }
    });
  }

  //Modification of registered data
  update (id: number, data: UpdateFilmeDto) {
    return this.prisma.films.update({
      where:{id},
      data,
      include:{
        EspectadorFilmes: true,
      }
    });
    }

    //Deleting a registered movie
  remove (id: number) {
    return this.prisma.films.delete({
      where:{id}
    });
  }
}
