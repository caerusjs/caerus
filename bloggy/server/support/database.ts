import * as TypeORM from 'typeorm'

export const connectDatabase = async () => {
  return TypeORM.createConnection()
}

export const disconnectDatabase = () => {
  return TypeORM.getConnection().close()
}