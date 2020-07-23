const { Router } = require('express')
const controllers = require('../controllers/subscriptions')

const router = Router()

router.get('/subscriptions', controllers.getSubscriptions)
router.get('/subscriptions/:id', controllers.getSubscription)
router.post('/subscriptions', controllers.createSubscription)
router.put('/subscriptions/:id', controllers.updateSubscription)
router.delete('/subscriptions/:id', controllers.deleteSubscription)

module.exports = router 
