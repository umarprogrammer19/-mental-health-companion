import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Analyze the sentiment of this text and respond with ONLY a JSON object in this format: {"sentiment": "positive" | "negative" | "neutral", "score": 0-1, "analysis": "brief explanation"}. Text: "${text}"`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const responseText = response.text()

    // Parse JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/)
    const sentimentData = jsonMatch
      ? JSON.parse(jsonMatch[0])
      : { sentiment: "neutral", score: 0.5, analysis: "Unable to analyze" }

    return Response.json(sentimentData)
  } catch (error) {
    console.error("Sentiment analysis error:", error)
    return Response.json({ error: "Failed to analyze sentiment" }, { status: 500 })
  }
}
