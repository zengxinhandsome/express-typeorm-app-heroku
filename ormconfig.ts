import { ConnectionOptions } from 'typeorm';

console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: true,
  migrationsTableName: 'custom_migration_table',
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities'
  },
  ssl:
    process.env.NODE_ENV === 'production'
      ? {
          rejectUnauthorized: false
        }
      : false
};
export default ormConfig;
