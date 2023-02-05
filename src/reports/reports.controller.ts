import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateReportDto } from './dtos/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post('/report/create')
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto) {
    const report = this.reportsService.create(body);

    return report;
  }
}
