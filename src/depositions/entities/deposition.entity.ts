import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';

@Entity({ name: 'depositions' })
export class Deposition {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'content' })
    content: string;

    @Column({ name: 'image', nullable: true })
    image: BinaryType;

    @Column({ name: 'username' })
    username: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
