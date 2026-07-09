import { apiConnector } from "../apiconnector"
import { aiAdvisorEndpoints } from "../apis"

const { AI_ADVISOR_API } = aiAdvisorEndpoints

export const getAIAdvisorResponse = async (message, token) => {
  try {
    const response = await apiConnector(
      "POST",
      AI_ADVISOR_API,
      {
        message,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )

    console.log("AI ADVISOR API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    return response.data.reply
  } catch (error) {
    console.log("AI ADVISOR API ERROR............", error)

    throw error
  }
}