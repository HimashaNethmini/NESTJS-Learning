// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PrismaService {}

import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {}
