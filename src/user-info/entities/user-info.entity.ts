import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'userInfo',
  timestamps: false,
})
export class UserInfo extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,

  })
  firstname: string;

  @Column({})
  lastname: string;

  @Column({})
  age: number;

  @Column({})
  hobby: string;
}
