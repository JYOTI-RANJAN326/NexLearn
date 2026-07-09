import { useState } from "react"
import { useSelector } from "react-redux"
import { FiArrowUp, FiCompass, FiTarget, FiTrendingUp } from "react-icons/fi"
import { HiOutlineSparkles } from "react-icons/hi2"

import { getAIAdvisorResponse } from "../services/operations/AIAdvisorAPI"

const suggestedPrompts = [
  {
    icon: <FiCompass />,
    title: "Create a learning roadmap",
    prompt: "Create a complete learning roadmap for becoming a full stack developer.",
  },
  {
    icon: <FiTarget />,
    title: "Find my skill gaps",
    prompt: "Help me identify the skills I need to become job-ready as a software developer.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Plan my career",
    prompt: "Help me create a career plan for getting a software engineering internship.",
  },
]

const AIAdvisor = () => {
  const { token } = useSelector((state) => state.auth)

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (customMessage) => {
    const userMessage = customMessage || message

    if (!userMessage.trim() || loading) return

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ])

    setMessage("")
    setLoading(true)

    try {
      const reply = await getAIAdvisorResponse(userMessage, token)

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I couldn't generate advice right now. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-richblack-900 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-11/12 max-w-[900px] flex-col">

        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-16">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 text-3xl text-richblack-900 shadow-[0_0_30px_rgba(255,214,10,0.2)]">
              <HiOutlineSparkles />
            </div>

            <h1 className="text-center text-3xl font-semibold md:text-5xl">
              Meet your{" "}
              <span className="bg-gradient-to-r from-yellow-50 to-yellow-200 bg-clip-text text-transparent">
                NEX AI Advisor
              </span>
            </h1>

            <p className="mt-5 max-w-[650px] text-center text-base leading-7 text-richblack-300">
              Get personalized learning roadmaps, discover your skill gaps,
              plan your career, and decide what to learn next.
            </p>

            <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              {suggestedPrompts.map((item, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(item.prompt)}
                  className="group rounded-xl border border-richblack-700 bg-richblack-800 p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-yellow-50"
                >
                  <div className="mb-4 text-2xl text-yellow-50">
                    {item.icon}
                  </div>

                  <p className="font-semibold text-richblack-5">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-richblack-300">
                    {item.prompt}
                  </p>
                </button>
              ))}
            </div>

          </div>
        ) : (
          <div className="flex-1 space-y-6 py-10">
            {messages.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-5 py-4 leading-7 ${
                    chat.role === "user"
                      ? "bg-yellow-50 text-richblack-900"
                      : "border border-richblack-700 bg-richblack-800 text-richblack-100"
                  }`}
                >
                  {chat.role === "assistant" && (
                    <div className="mb-2 flex items-center gap-2 font-semibold text-yellow-50">
                      <HiOutlineSparkles />
                      NEX AI Advisor
                    </div>
                  )}

                  {chat.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-richblack-700 bg-richblack-800 px-5 py-4">
                  <div className="flex items-center gap-3 text-richblack-300">
                    <HiOutlineSparkles className="text-yellow-50" />
                    NEX AI Advisor is thinking...
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="sticky bottom-0 bg-richblack-900 pb-6 pt-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 rounded-2xl border border-richblack-600 bg-richblack-800 p-2 focus-within:border-yellow-50"
          >
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault()
                  sendMessage()
                }
              }}
              placeholder="Ask NEX AI Advisor anything..."
              rows="1"
              className="max-h-32 min-h-[48px] flex-1 resize-none bg-transparent px-4 py-3 text-richblack-5 outline-none placeholder:text-richblack-400"
            />

            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-xl text-richblack-900 transition-all hover:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiArrowUp />
            </button>
          </form>

          <p className="mt-3 text-center text-xs text-richblack-500">
            NEX AI Advisor can make mistakes. Verify important career decisions.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AIAdvisor