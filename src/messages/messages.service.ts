import { Injectable } from '@nestjs/common';
import {MessageDto} from './MessageDto';


export interface Message{
  id: number;
  text: string;
}

@Injectable()
export class MessagesService {
  
  private messages: Message[] = [
    {
      id:1,
      text: "Priemira Mensagem",
    },
    {
      id:2,
      text: "Segunda Mensagem",
    },
  ];

  findAll(){
    return this.messages.filter(Boolean);
  }

  async findById(id:number){
   const message =  this.messages.find((msg:Message) => msg?.id === id);

   if (!message) {
     throw Error(`Mensagem com o ID '${id}' não encontrada.`);
   }
   return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;
    const message : Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);
    return message;
  }

  async update(id: number, messageDto : MessageDto){
    const index = this.messages.findIndex((msg:Message) =>msg?.id === id);

    if(index < 0 ){
      throw Error (`Mensagem com  ID 'S{id}' não encontrada.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages[index] = message;
    return message;
  }

  async delete(id: number){
    const index = this.messages.findIndex((msg:Message) => msg?.id === id);

    if(index < 0 ){
      throw Error(`Mensagem com o ID  'S{id}' não encontrada.`);
    }

    delete this.messages[index];

  }
}
