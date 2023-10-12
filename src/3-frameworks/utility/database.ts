import { Sequelize, Options } from 'sequelize'

const connectionOptions: Options = {
    host: process.env.PG_HOST || 'localhost',
    port: +process.env.PG_PORT || 5432,
    username: process.env.PG_USERNAME || 'postgres',
    password: process.env.PG_PASSWORD || '12345',
    database: process.env.PG_DB || 'seja_best',
    dialect: 'postgres',
    logging: false,
    define: { underscored: true, omitNull: false },
    pool: {
        max: 2,
        min: 0,
        idle: 0,
        acquire: 3000,
        evict: 15000,
    },
    dialectOptions: {
        connectTimeout: 15000,
    },
}

export const sequelize = new Sequelize(connectionOptions)