const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
  {
    charge: { type: String, required: true },
    category: { type: String, required: true },
    subscription: { type: Boolean, required: true },
    billingCycle: { type: String, required: true },
    autoRenew: { type: Boolean, required: true },
    amount: { type: String, required: true },
    lastUsed: { type: String, required: true },
  }
)
module.exports = mongoose.model('subscriptions', Subscription)
