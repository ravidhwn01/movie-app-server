import { STRING, TEXT, BOOLEAN } from 'sequelize';
import { Column, Default, Model, Table } from 'sequelize-typescript';

@Table
export class MovieSchema extends Model {
  @Column(TEXT)
  title: string;
  @Column(TEXT)
  overview: string;
  @Column(TEXT)
  imgUrl: string;
  @Default(false)
  @Column(BOOLEAN)
  isWatched: boolean;
}
