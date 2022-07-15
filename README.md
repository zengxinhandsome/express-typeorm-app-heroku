# hreoku 部署遇到的一些问题

## horeku 数据库安装问题

- 1.Resources > 添加对应的数据库
- 2.数据库添加成功后，可以在 Settings > Config Vars > Reveal Config Vars 看到新增了一个 DATABASE_URL 环境变量
- 3.当项目部署到 heroku 后，根目录 .env 文件里面的 DATABASE_URL 会被替换成 heroku 中的 DATABASE_URL，同理，你可以在 Config Vars 里面添加你想要的环境变量

## 环境变量问题

安装 dotenv，并在根目录下创建 .env 文件

这是本地开发的数据库连接地址

DATABASE_URL=postgres://postgres:[YOUR_PASSWORD]@localhost:5432/express-typeorm-post

当项目部署成功后，会读取 heroku 的环境变量

PORT: 需要使用 process.env.PORT || <your default PORT>

process.env.DATABASE_URL

## Procfile

需要在根目录添加 Profile 文件，内容如下

web:node dist/src/index.js

注意：分号右边不能加空格，否则会报错，node 后面是你要执行的文件地址

## typeorm Config

```ts
const ormConfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: true, // 设置成 true，这样会自动同步 entities，比如新增一个 Entity 会自动在数据库创建一张对应的表
  migrationsTableName: 'custom_migration_table',
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities'
  },
  // 在生产环境需要设置 ssl 为 { rejectUnauthorized: false }，否则 migration 的时候会报错
  ssl:
    process.env.NODE_ENV === 'production'
      ? {
          rejectUnauthorized: false
        }
      : false
};
```

## typeorm migration

- 1. 运行 `heroku run bash` 命令，进入 heroku 命令行界面
- 2. 执行 `yarn typeorm migration:create -n <migrationName>` 生成 migration 文件
- 3. 执行 `yarn typeorm migration:run` 运行 migration
- 4. 运行成功后会在数据库添加 custom_migration_table(ormConfig 里面可以设置) 表
