import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreatePoleColumn1631050894162 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'pole',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'pole');
  }
}
