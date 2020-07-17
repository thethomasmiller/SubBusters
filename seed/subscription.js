const db = require('../db/connection')
const Subscription = require('../models/subscription')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const subscriptions =
    [
      {
        "charge": "Netflix",
        "category":"Movies and TV",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "14.99",
        "lastUsed": "Jun 16",
      },
      {
        "charge": "Hulu",
        "category":"Movies and TV",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "8.99",
        "lastUsed": "Nov 23",
      },
      {
        "charge": "Prime",
        "category":"Movies and TV",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "99.99",
        "lastUsed": "May 20",
      },
      {
        "charge": "Formstack",
        "category":"Software",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "39.99",
        "lastUsed": "Jan 5",
      },
      {
        "charge": "Adobe",
        "category":"Software",
        "subscription": true,
        "billingCycle": "Yearly",
        "autoRenew": true,
        "amount": "599.99",
        "lastUsed": "Feb 25",
      },
      {
        "charge": "Spotify",
        "category":"Music",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "9.99",
        "lastUsed": "Jun 22",
      },
      {
        "charge": "Pandora",
        "category":"Music",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "4.99",
        "lastUsed": "May 17",
      },
      {
        "charge": "iTunes",
        "category":"Music",
        "subscription": true,
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "5.99",
        "lastUsed": "Apr 5",
      },
    ]
  
  await Subscription.insertMany(subscriptions)
  console.log("Created subscriptions!")
}
const run =async() => {
  await main()
  db.close()
}

run()