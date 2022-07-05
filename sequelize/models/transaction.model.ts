import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'transaction',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
})
export default class Transaction extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING(66),
        comment: '생성된 Tx와 관련된 테이블입니다',
        allowNull: false,
    })
    transactionHash!: string;

    @AllowNull(true)
    @Column(DataType.STRING(66))
    blockHash!: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    blockNumber!: Number;

    @AllowNull(false)
    @Column(DataType.STRING(42))
    sender!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    gas!: number;

    @AllowNull(false)
    @Column(DataType.STRING(44))
    gasPrice!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    hash!: string;

    @AllowNull(false)
    @Column(DataType.STRING(22))
    input!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    nonce!: number;

    @AllowNull(false)
    @Column(DataType.STRING(44))
    receiver!: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    transactionIndex!: number;

    @AllowNull(false)
    @Column(DataType.STRING(22))
    value!: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    type!: number;

    @AllowNull(false)
    @Column(DataType.STRING(22))
    v!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    r!: string;

    @AllowNull(false)
    @Column(DataType.STRING(66))
    s!: string;

    @AllowNull(true)
    @Column(DataType.STRING(44))
    contractAddress!: string | null;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    gasUsed!: Number;

    @AllowNull(true)
    @Column(DataType.STRING(5))
    status!: string;
}
