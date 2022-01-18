"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// postgres://rwhttuyvjlokrw:8b0b7986e19c682dcf9fe51883a2fd2ebd38c8e5296212cf2d1aa7b69bbe93f4@ec2-3-232-22-121.compute-1.amazonaws.com:5432/d8rlgpmcsv7187
var ormConfig = {
    // host: 'localhost',
    // username: 'postgres',
    // password: 'zx1328526673',
    // database: 'express-typeorm-post',
    type: 'postgres',
    host: 'ec2-3-232-22-121.compute-1.amazonaws.com',
    port: 5432,
    username: 'rwhttuyvjlokrw',
    password: '8b0b7986e19c682dcf9fe51883a2fd2ebd38c8e5296212cf2d1aa7b69bbe93f4',
    database: 'd8rlgpmcsv7187',
    logging: true,
    synchronize: false,
    migrationsTableName: 'custom_migration_table',
    entities: ['dist/src/entities/*.js'],
    migrations: ['dist/src/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities'
    }
};
exports.default = ormConfig;
