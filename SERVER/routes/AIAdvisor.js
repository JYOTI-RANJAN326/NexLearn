const express = require("express")
const router = express.Router()

const { getAIAdvice } = require("../controllers/AIAdvisor")
const { auth } = require("../middlewares/auth")

// Only logged-in users can use NEX AI Advisor
router.post("/advisor", auth, getAIAdvice)

module.exports = router