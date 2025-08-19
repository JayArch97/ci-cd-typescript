import {Column, Model, Table, DataType } from 'sequelize-typescript'; 

@Table({tableName: 'cases'})
export class Case extends Model<Case>{

  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  case_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

}
