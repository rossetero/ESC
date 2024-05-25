const router = require("express").Router();

router.get('/game-links', (request, response) => {
    response.send(require('../json/game-links/success.json'))
  })

router.get('/4u2k-links', (request, response) => {
  response.send(require('../json/4u2k-links/newsuccess.json'))
})
;

module.exports = router;
