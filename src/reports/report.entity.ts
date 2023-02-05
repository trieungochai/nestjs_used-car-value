import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  year: number;

  @Column()
  long: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;
}
