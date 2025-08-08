import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({tableName: 'users'})
export class User extends Model<User> {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({ 
    defaultValue: true,     
     allowNull: false,
 })
  isActive: boolean;
}