import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({tableName: 'tasks'})
export class Tasks extends Model<Tasks> {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true, 
  })
  task: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  follow_up_time: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  notes: string;

  @Column({
    type: DataType.BLOB,
    allowNull: false,
  })
  attachment: string;

}