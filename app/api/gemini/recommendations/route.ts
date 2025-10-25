import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(request: Request) {
  try {
    const { mood, recentMoods } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Based on the user's current mood "${mood}" and recent mood history ${JSON.stringify(recentMoods)}, provide 3 personalized self-care recommendations. Respond with ONLY a JSON array of objects with this format: [{"activity": "activity name", "duration": "time", "description": "brief description", "category": "category"}]`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const responseText = response.text()

    // Parse JSON from response
    const jsonMatch = responseText.match(/\[[\s\S]*\]/)
    const recommendations = jsonMatch ? JSON.parse(jsonMatch[0]) : []

    return Response.json({ recommendations })
  } catch (error) {
    console.error("Recommendations error:", error)
    return Response.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
