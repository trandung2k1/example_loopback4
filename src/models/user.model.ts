// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {User} from '@loopback/authentication-jwt';
import {model, property} from '@loopback/repository';
@model({
  settings: {
    strictObjectIDCoercion: true,
    mongodb: {collection: 'users'},
  },
})
export class UserModel extends User {
  @property({
    type: 'string',
    id: true,
  })
  id: string;
  mongodb: {dataType: 'ObjectId'};

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  // @belongsTo(() => Profile)
  // profileId: string;

  // constructor(data: Partial<User>) {
  //   super(data);
  // }
}

// export interface UserRelations {
//   // profile?: Profile; // Defines a relation to the Category model
// }

// export type UsertWithRelations = User & UserRelations;
