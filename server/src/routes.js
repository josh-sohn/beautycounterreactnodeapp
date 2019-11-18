const express = require('express')
const router = express.Router()

const FruitsController = require('./Controllers/FruitsController.js')
const fruitsRoute = '/fruits'

router.get(fruitsRoute + '/:fruit',
  (req, res, next) => {
    FruitsController.getOneFruit(req, res, next)
  }
)

router.get(fruitsRoute,
  (req, res, next) => {
    FruitsController.getAllFruits(req, res, next)
  }
)

module.exports = router;