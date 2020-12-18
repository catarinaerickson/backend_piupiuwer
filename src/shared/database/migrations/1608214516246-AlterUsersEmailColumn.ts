import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUsersEmailColumn1608214516246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'email', new TableColumn({
            name: 'email',
            type: 'varchar',
            isUnique: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'email', new TableColumn({
            name: 'email',
            type: 'varchar'
        }))
    }

}
