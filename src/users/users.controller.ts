import { UsersService } from './users.service';
import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('reset-problems-flag')
  async resetProblemsFlag(): Promise<{ count: number }> {
    const count = await this.usersService.resetProblemsFlag();
    return { count };
  }
}
