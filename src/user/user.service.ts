import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  getUserData() {
    return "this is your data"
  }

  createUser() {
    return "the user was created"
  }

  progress() {
    return "this is your progress overtime"
  }
}
