const db = require('../db/connection')
const Subscription = require('../models/subscription')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const subscriptions =
    [
      {
        "name": "Netflix",
        "category":"Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "14.99",
        "billingDate": "Jun 16",
        "logoURL": "",
        "websiteURL":""
      },
      {
        "name": "Hulu",
        "category":"Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "8.99",
        "billingDate": "Nov 23",
        "logoURL": "",
        "websiteURL":"http://netflix.com"
      },
      {
        "name": "Prime",
        "category":"Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "99.99",
        "billingDate": "May 20",
        "logoURL": "",
        "websiteURL":"https://www.primevideo.com"
      },
      {
        "name": "Formstack",
        "category":"Software",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "39.99",
        "billingDate": "Jan 5",
        "logoURL": "",
        "websiteURL":"https://www.formstack.com/index"
      },
      {
        "name": "Adobe",
        "category":"Software",
        "billingCycle": "Yearly",
        "autoRenew": true,
        "amount": "599.99",
        "billingDate": "Feb 25",
        "logoURL": "",
        "websiteURL":"https://www.adobe.com"
      },
      {
        "namee": "Spotify",
        "category":"Music",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "9.99",
        "billingDate": "Jun 22",
        "logoURL": "",
        "websiteURL":"https://www.spotify.com/us/"
      },
      {
        "name": "Pandora",
        "category":"Music",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "4.99",
        "billingDate": "May 17",
        "logoURL": "",
        "websiteURL":"https://www.pandora.com/station/play/4537590550201112475"
      },
      {
        "name": "iTunes",
        "category":"Music",
        "billingCycle": "Monthly",
        "autoRenew": true,
        "amount": "5.99",
        "billingDate": "Apr 5",
        "logoURL": "",
        "websiteURL":"https://www.apple.com/itunes/"
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