// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {Entity, model, property} from '@loopback/repository';
@model({
  settings: {
    strictObjectIDCoercion: true,
  },
})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  // @belongsTo(() => Profile)
  // profileId: string;

  constructor(data: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // profile?: Profile; // Defines a relation to the Category model
}

export type UsertWithRelations = User & UserRelations;
