import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class RefactorUserProfileId1608336806970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'profileId', new TableColumn({
            name: 'profileId',
            type: 'uuid',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users', 'profileId', new TableColumn({
            name: 'profileId',
            type: 'uuid',
            isNullable: false
        }))
    }

}
