import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this.userService.findAll(sort);
  }

  @Get(':id')
  findUserId(@Param() id: string) {
    return this.userService.findUserId(id);
  }
}
