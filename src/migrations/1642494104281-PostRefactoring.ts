import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1642494104281 implements MigrationInterface {
    name = 'PostRefactoring1642494104281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updateAt"`);
    }

}
