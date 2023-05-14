import { Sequelize } from "sequelize";

export default new Sequelize(
    'blog',
    'postgres',
    'qwerty',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)