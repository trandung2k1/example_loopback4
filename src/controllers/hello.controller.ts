// Uncomment these imports to begin using these cool features!

import {get, getModelSchemaRef, post, requestBody} from '@loopback/rest';
import {User} from '../models/user.model';

// import {inject} from '@loopback/core';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @post('/user', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'New User',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<User, 'id'>,
  ): Promise<User> {
    return user;
  }
}
