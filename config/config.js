const config = {
  PORT: process.env.PORT || 4037,
  DB: process.env.DB || 'mongodb://localhost:27017/crud-react',
  ENVIROMENT: process.env.ENVIROMENT || 'Local',
  SECRET: process.env.SECRET || 'CRUDREACT',
  ADMIN: process.env.ADMIN || 'Michael_Sarco',
  NAME: process.env.NAME || 'CRUD - React',
}

module.exports = config
