const Subscription = require('../models/subscription')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find()
    res.json(subscriptions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSubscription = async (req, res) => {
  try {
    const { id } = req.params
    const subscription = await Subscription.findbyId(id)
    if (subscription) {
      return res.json(subscription)
    }
    res.status(404).json({ message: 'Subscription not found!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createSubscription = async (req, res) => {
  try {
    const subscription = await new Subscription(req.body)
    await subscription.save()
    res.status(201).json(subscription)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateSubscription = async (req, res) => {
  const { id } = req.params
  await Subscription.findByIdAndUpdate(id, req.body, { new: true }, (error, subscription) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found!' })
    }
    res.status(200).json(subscription)
  })
}

const deleteSubscription = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Subscription.findByIdAndUpdate(id)
    if (deleted) {
      return res.status(200).send('Subscription deleted')
    }
    throw new Error('Subscription not found')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


module.exports = {
  createSubscription,
  getSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription
}