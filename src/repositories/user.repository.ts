import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources/mongodb.datasource';
import {UserModel} from '../models/user.model';

export class UserRepo extends DefaultCrudRepository<
  UserModel,
  typeof UserModel.prototype.id
> {
  constructor(@inject('datasources.mongodb') dataSource: MongodbDataSource) {
    super(UserModel, dataSource);
  }
}
