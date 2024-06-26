import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        UsersModule,
        JwtModule.register({
            secret:  process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            } 
        })
    ]
})
export class AuthModule {}
