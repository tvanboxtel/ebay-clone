import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export default class Advertisement extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable:false})
    title: string

    @Column('text')
    price: number
}