const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subscription = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    billingCycle: { type: String, required: true },
    autoRenew: { type: Boolean, required: true },
    amount: { type: String, required: true },
    billingDate: { type: String, required: true },
    logoURL: { type: String, required: true },
    websiteURL: {type: String, required:true}
  },
  { timestamps: true }
)

module.exports = mongoose.model('subscriptions', Subscription)
