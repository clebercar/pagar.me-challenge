module.exports = {
  host: 'db-psp',
  username: 'payment_service',
  password: 'payment_service',
  database: 'payment_service_development',
  dialect: 'postgres',
  operatorsAliases: false,
  loggin: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}