import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateReportDto } from './dtos/create-report.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    const report = this.reportsService.create(body, user);

    return report;
  }
}
