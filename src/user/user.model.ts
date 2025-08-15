import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({tableName: 'users'})
export class User extends Model<User> {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;


  @Column({ 
    defaultValue: true,     
     allowNull: false,
 })
  is_active: boolean;
}