import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    private user: User[] = []

    async findAll(sort: 'asc' | 'desc' = 'desc'){
        return sort
    }

    async findUserId(id: string){
        return id
    }
}
