const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
  {
    name: { type: String, required: false },
    category: { type: String, required: false },
    billingCycle: { type: String, required: false },
    autoRenew: { type: String, required: false },
    amount: { type: String, required: false },
    billingDate: { type: String, required: false },
    logoURL: { type: String, required: false },
    websiteURL: {type: String, required:false}
  },
  { timestamps: true }
)

module.exports = mongoose.model('subscriptions', Subscription)
