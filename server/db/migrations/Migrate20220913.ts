import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate20220913 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE users ADD COLUMN password VARCHAR constraint`);
    await queryRunner.query(`ALTER TABLE users ALTER COLUMN name SET NOT NULL;`);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE users DROP COLUMN password VARCHAR constraint`);
    await queryRunner.query(`ALTER TABLE users ALTER COLUMN name DROP NOT NULL;`);
  }
}
