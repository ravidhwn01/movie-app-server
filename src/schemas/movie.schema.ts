import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class MovieSchema extends Model {
  @Column
  title: string;
  @Column
  overview: string;
  @Column
  imgUrl: string;
}
