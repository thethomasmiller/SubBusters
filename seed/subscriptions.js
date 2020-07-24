const db = require('../db/connection')
const Subscription = require('../models/subscription')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const subscriptions =
    [
      {
        "name": "Netflix",
        "category": "Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "14.99",
        "billingDate": "Jun 16",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/NeflixTrans_sjgu1c.png",
        "websiteURL": "https://netflix.com"
      },
      {
        "name": "Hulu",
        "category": "Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "8.99",
        "billingDate": "Nov 23",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/Hulu_lpgul4.png",
        "websiteURL": "https://hulu.com"
      },
      {
        "name": "Prime",
        "category": "Movies and TV",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "99.99",
        "billingDate": "May 20",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446319/Prime_1_uvte14.png",
        "websiteURL": "https://www.primevideo.com"
      },
      {
        "name": "Formstack",
        "category": "Software",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "39.99",
        "billingDate": "Jan 5",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446319/formastack_1_seaebe.png",
        "websiteURL": "https://www.formstack.com/index"
      },
      {
        "name": "Adobe",
        "category": "Software",
        "billingCycle": "Yearly",
        "autoRenew": "Yes",
        "amount": "599.99",
        "billingDate": "Feb 25",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/adovbe_ij4stn.png",
        "websiteURL": "https://www.adobe.com"
      },
      {
        "name": "Spotify",
        "category": "Music",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "9.99",
        "billingDate": "Jun 22",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/Spotify_1_uty0ni.png",
        "websiteURL": "https://www.spotify.com/us/"
      },
      {
        "name": "Pandora",
        "category": "Music",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "4.99",
        "billingDate": "May 17",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/pandorat_bjnsbb.png",
        "websiteURL": "https://www.pandora.com/station/play/4537590550201112475"
      },
      {
        "name": "iTunes",
        "category": "Music",
        "billingCycle": "Monthly",
        "autoRenew": "Yes",
        "amount": "5.99",
        "billingDate": "Apr 5",
        "logoURL": "https://res.cloudinary.com/alienora/image/upload/v1595446140/Itunes_pme4wb.png",
        "websiteURL": "https://www.apple.com/itunes/"
      },
    ]

  await Subscription.insertMany(subscriptions)
  console.log("Created subscriptions!")
}
const run = async () => {
  await main()
  db.close()
}

run()