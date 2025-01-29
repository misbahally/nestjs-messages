import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        // DONT DO THIS ON REAL APPS
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessage() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
