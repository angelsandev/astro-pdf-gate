// Crear la tabla de MySQL

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pdfs') // Nombre de la tabla en MySQL
export class Pdf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  size: string;

  @Column()
  type: string; // Ej: 'Manual', 'Ficha de Datos', etc.

  @Column()
  url: string;

  @Column({ default: true })
  isActive: boolean;
}
