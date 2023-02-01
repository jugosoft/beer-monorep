import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1675271675211 implements MigrationInterface {
    name = '$npmConfigName1675271675211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "tagList" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "tagList"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "slug"`);
    }

}
