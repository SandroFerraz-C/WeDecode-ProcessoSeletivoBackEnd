import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

//Endpoints
@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  //Register a new movie
  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.create(createFilmeDto);
  }

    //Views of all registered movies
  @Get()
  findAll() {
    return this.filmeService.findAll();
  }

  //Movie views by ID
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmeService.findOne(+id);
  }

    //Modification of registered data
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.update(+id, updateFilmeDto);
  }

      //Deleting a registered movie
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.filmeService.remove(+id);
  }
}
