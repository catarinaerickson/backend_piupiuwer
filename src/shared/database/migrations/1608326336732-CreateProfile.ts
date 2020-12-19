import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateProfile1608326336732 implements MigrationInterface {
    name = 'CreateProfile1608326336732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profile',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'first_name',
                    type: 'varchar'
                },
                {
                    name: 'last_name',
                    type: 'varchar'
                },
                {
                    name: 'bio',
                    type: 'varchar'
                },
                {
                    name: 'photo',
                    type: 'varchar'
                }
            ]
        }))

        await queryRunner.addColumn('users', new TableColumn({
            name: 'profileId',
            type: 'uuid'
        }))

        await queryRunner.createForeignKey('users', new TableForeignKey({
            columnNames: ["profileId"],
            referencedColumnNames: ["id"],
            referencedTableName: "profile",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users", "profileId");
        await queryRunner.dropColumn("users", "profileId");
        await queryRunner.dropTable("profile");
    }

}
