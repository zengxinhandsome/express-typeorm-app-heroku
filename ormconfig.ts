import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'zx1328526673',
  database: 'express-typeorm-post',
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
export default ormConfig;
