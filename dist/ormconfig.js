"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
var ormConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: false,
    migrationsTableName: 'custom_migration_table',
    entities: ['dist/src/entities/*.js'],
    migrations: ['dist/src/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities'
    },
    extra: {
        // ssl: true
        ssl: process.env.NODE_ENV === 'production'
            ? {
                rejectUnauthorized: false
            }
            : false
    }
};
exports.default = ormConfig;
