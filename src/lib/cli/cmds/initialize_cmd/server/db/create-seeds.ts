export const createSeeds = () => {
  return (`import 'reflect-metadata'
import { createConnection, getConnection } from 'typeorm'

const seedDatabase = async () => {
}

seedDatabase()`)
}