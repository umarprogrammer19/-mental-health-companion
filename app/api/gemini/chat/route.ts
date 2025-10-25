import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    const history = conversationHistory
      .filter((msg: any) => msg && msg.text) // Filter out undefined messages
      .map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }))

    const chat = model.startChat({
      history: history,
    })

    const result = await chat.sendMessage(message)
    const response = await result.response
    const text = response.text()

    return Response.json({ text })
  } catch (error) {
    console.error("Gemini API error:", error)
    return Response.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
