import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'block',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
})
export default class Block extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING(66),
        comment: '생성된 블록에 대한 테이블입니다',
        allowNull: false,
    })
    public hash!: string;

    @AllowNull(false)
    @Column(DataType.STRING(10))
    public difficulty!: string;

    @AllowNull(false)
    @Column(DataType.STRING())
    public extraData!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    public gasLimit!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    public gasUsed!: number;

    @AllowNull(false)
    @Column(DataType.STRING(43))
    public miner!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public mixHash!: string;

    @AllowNull(false)
    @Column(DataType.STRING(20))
    public nonce!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    public number!: number;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public parentHash!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public receiptsRoot!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public sha3Uncles!: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    public size!: number;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public stateRoot!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    public timestamp!: number;

    @AllowNull(true)
    @Column(DataType.STRING(33))
    public totalDifficulty!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    public transactionsRoot!: string;

    @AllowNull(true)
    @Column(DataType.STRING(66))
    public uncles!: string;
}
