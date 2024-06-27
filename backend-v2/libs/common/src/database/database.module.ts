import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [
        // use forRootAsync to inject dependency (ConfigService)
        // to make sure ConfigModule is initiallized before MongooseModule
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('MONGO_CONNECTION_STRING'),
                dbName: 'app',
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models);
    }
}
