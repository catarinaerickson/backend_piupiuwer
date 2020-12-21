import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLikes1608503393603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'likes',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'userId',
                    type: 'uuid'
                },
                {
                    name: 'piuId',
                    type: 'uuid'
                }
            ]
        }))

        await queryRunner.createForeignKey('likes', new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey('likes', new TableForeignKey({
            columnNames: ["piuId"],
            referencedColumnNames: ["id"],
            referencedTableName: "pius",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("likes", "piuId");
        await queryRunner.dropForeignKey("likes", "userId");
        await queryRunner.dropTable("likes");
    }

}
