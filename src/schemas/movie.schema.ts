import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class MovieSchema extends Model {
  @Column
  movieName: string;
  @Column
  description: string;
  @Column
  date: string;
}
