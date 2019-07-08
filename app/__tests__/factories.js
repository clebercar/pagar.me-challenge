const faker = require('faker')
const { factory } = require('factory-girl')

const { Payable, User, Transaction } = require('../src/app/models')

factory.define('User', User, {
  name: faker.name.firstName(),
  email: factory.seq('User.email', (n) => {
    return `user${n}@${faker.internet.domainName()}`
  }),
  password: faker.internet.password()
})

factory.define('Transaction', Transaction, {
  value: faker.finance.amount(),
  description: faker.lorem.words(),
  payment_type: faker.random.arrayElement(['debit_card', 'credit_card']),
  card_number: '379291324237278',
  name_on_card: faker.name.firstName(),
  expiration_date: faker.date.future(),
  cvv: '2135',
  user_id: factory.assoc('User', 'id')
})

factory.define('Payable', Payable, {
  status: faker.random.arrayElement(['paid', 'waiting_funds']),
  payment_date: faker.date.past(),
  amount: faker.finance.amount(),
  transaction_id: factory.assoc('Transaction', 'id')
})

module.exports = factory
