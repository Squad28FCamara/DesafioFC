import { table } from 'console';
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateChairColumn1630862371868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'chairs',
        type: 'integer',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'chairs');
  }
}
