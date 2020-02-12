import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './user.service';
import { user } from './user.entity';
import { get } from 'http';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    findAll(): string {
        return 'users page';
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() userData: user) {
       // console.log(`user got by ${user.password} ${user.username}`);
        return this.service.createUser(userData)
    }

    @Put()
    update(@Body() user: user) {
        return this.service.updateUser(user);
    }
    //send key to delete
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}