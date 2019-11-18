const Fruits = require('../mockData')


module.exports = {
    async getOneFruit(req, res, next) {
        let fruitDict = {}
        for (let fruit of Fruits) {
            fruitDict[fruit.name.toLowerCase()] = fruit
        }
        let fruitQuery = req.params.fruit
        if (fruitDict[fruitQuery]) {
            return res.status(200).json({
                data: fruitDict[fruitQuery],
                message: `Found a ${fruitDict[fruitQuery].name}!`
            })
        } else {
            return res.status(400).json({
                error: 'Unable to find that fruit.'
            })
        }
    },
    async getAllFruits(req, res, next) {
        return res.status(200).json({
            data: Fruits,
            message: 'Here you go!~'
        })
    }
}