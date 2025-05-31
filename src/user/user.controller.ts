import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get("info")
  getUserData(){
    return this.userService.getUserData()
  }

  @Get("progress")
  getProgress() {
    return this.userService.progress()
  }

  @Post("create")
  createUser() {
    this.userService.createUser()
  }
  
}
