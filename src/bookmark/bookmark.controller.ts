import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookmarkService } from './bookmark.service';
import { Request } from 'express';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post('create')
  createBookmark(@Req() req: Request, @Body() dto: CreateBookmarkDto) {
    // @ts-expect-error figure out why
    return this.bookmarkService.createBookmark(req.user.id, dto);
  }

  @Patch('update/:id')
  updateBookmark(
    @Req() req: Request,
    @Body() dto: EditBookmarkDto,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    // @ts-expect-error figure out why
    return this.bookmarkService.updateBookmark(req.user.id, dto, bookmarkId);
  }

  @Get('single/:id')
  getBookmark(
    @Req() req: Request,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    // @ts-expect-error figure out why
    return this.bookmarkService.getBookmark(req.user.id, bookmarkId);
  }

  @Get('all')
  getAllBookmarks(@Req() req: Request) {
    // @ts-expect-error figure out why
    return this.bookmarkService.getAllBookmarks(req.user.id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  deleteBookmark(
    @Req() req: Request,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    // @ts-expect-error figure out why
    return this.bookmarkService.deleteBookmark(req.user.id, bookmarkId);
  }
}
