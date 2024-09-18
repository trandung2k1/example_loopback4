// Uncomment these imports to begin using these cool features!
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef} from '@loopback/rest';
import {User} from '../models/user.model';
import {UserRepository} from '../repositories/user.repository';
// import {inject} from '@loopback/core';

export class UserController {
  constructor(@repository(UserRepository) public userRepo: UserRepository) {}

  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Get all users successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(User, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async getAllUser(): Promise<User[]> {
    return this.userRepo.find();
  }

  // @post('/users', {
  //   responses: {
  //     '200': {
  //       description: 'User model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(User)}},
  //     },
  //   },
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(User, {
  //           title: 'Create new user',
  //           exclude: ['id'],
  //         }),
  //       },
  //     },
  //   })
  //   user: Omit<User, 'id'>,
  // ): Promise<User> {
  //   return user;
  // }
}
