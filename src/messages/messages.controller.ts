import { Body, Controller, Get, Param, Post, Put, Delete, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Message } from './message';
import { MessagesService } from './messages.service';
import { MessageDto } from './messageDto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService){
    
  }
  
  @Get()
  findAll(){
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params){
    return this.messagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }  

  @Post()
    create(@Body() messageDto:MessageDto){
       this.messagesService.create(messageDto);
 
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id,  @Body() messageDto:MessageDto){
    return this.messagesService.update(id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
      return this.messagesService.delete(id).catch((e) => {
        throw new NotFoundException(e.message);
      });
    }
  
}
