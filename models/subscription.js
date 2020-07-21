const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
  {
    name: { type: String, required: false },
    category: { type: String, required: true },
    billingCycle: { type: String, required: true },
    autoRenew: { type: String, required: true },
    amount: { type: String, required: true },
    billingDate: { type: String, required: true },
    logoURL: { type: String, required: false },
    websiteURL: {type: String, required: false}
  },
  { timestamps: true }
)

module.exports = mongoose.model('subscriptions', Subscription)
