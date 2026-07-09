const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

exports.getAIAdvice = async (req, res) => {
  try {
    const { message } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a question.",
      })
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are NEX AI Advisor, the intelligent learning and career advisor of the NexLearn education platform.

Your role is to help learners with:
- personalized learning roadmaps
- course recommendations
- career guidance
- skill-gap analysis
- programming and technology learning paths
- choosing what to learn next

Give clear, practical, encouraging, and structured answers.
Use bullet points and step-by-step roadmaps when useful.
Do not claim to be Groq or any underlying AI model.
Always introduce yourself as NEX AI Advisor when an introduction is needed.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_completion_tokens: 1500,
    })

    const reply = completion.choices[0]?.message?.content

    return res.status(200).json({
      success: true,
      reply,
    })
  } catch (error) {
    console.error("AI ADVISOR ERROR:", error)

    return res.status(500).json({
      success: false,
      message: "NEX AI Advisor is currently unavailable. Please try again.",
    })
  }
}