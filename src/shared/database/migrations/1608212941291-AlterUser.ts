import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUser1608212941291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'email',
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'email');
    }

}
