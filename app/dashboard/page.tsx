"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Leaf, TrendingUp, BookOpen, LogOut, Menu, X } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

const moodData = [
  { date: "Mon", mood: 6 },
  { date: "Tue", mood: 7 },
  { date: "Wed", mood: 5 },
  { date: "Thu", mood: 8 },
  { date: "Fri", mood: 7 },
  { date: "Sat", mood: 9 },
  { date: "Sun", mood: 8 },
]

const selfCareData = [
  { activity: "Meditation", completed: 5 },
  { activity: "Exercise", completed: 3 },
  { activity: "Reading", completed: 4 },
  { activity: "Journaling", completed: 6 },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [aiInsight, setAiInsight] = useState("")
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const moods = [
    { emoji: "😊", label: "Happy", value: "happy", color: "bg-yellow-100 border-yellow-300" },
    { emoji: "😔", label: "Sad", value: "sad", color: "bg-blue-100 border-blue-300" },
    { emoji: "😰", label: "Anxious", value: "anxious", color: "bg-orange-100 border-orange-300" },
    { emoji: "😌", label: "Calm", value: "calm", color: "bg-green-100 border-green-300" },
    { emoji: "😤", label: "Frustrated", value: "frustrated", color: "bg-red-100 border-red-300" },
    { emoji: "😴", label: "Tired", value: "tired", color: "bg-purple-100 border-purple-300" },
  ]

  const handleMoodSelect = async (moodValue: string) => {
    setSelectedMood(moodValue)
    setIsLoading(true)

    try {
      const response = await fetch("/api/gemini/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood: moodValue,
          recentMoods: moodData,
        }),
      })

      const data = await response.json()
      setRecommendations(data.recommendations || [])
    } catch (error) {
      console.error("Error fetching recommendations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveMood = async () => {
    if (!selectedMood) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `I'm feeling ${selectedMood} today. Can you provide a brief insight about this mood and how to manage it?`,
          conversationHistory: [],
        }),
      })

      const data = await response.json()
      setAiInsight(data.text || "Keep taking care of yourself!")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MindCare</span>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              {user?.email}
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "block" : "hidden"} md:block w-full md:w-64 border-r border-border bg-muted/30 p-6 space-y-4`}
        >
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold"
            >
              <TrendingUp className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/chatbot"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            >
              <Brain className="w-5 h-5" />
              AI Therapy
            </Link>
            <Link
              href="/self-care"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            >
              <Leaf className="w-5 h-5" />
              Self-Care
            </Link>
            <Link
              href="/journal"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Journal
            </Link>
            <Link
              href="/progress"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              Progress
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back, {user?.displayName || "User"}</h1>
            <p className="text-muted-foreground">How are you feeling today?</p>
          </div>

          {/* Mood Tracker */}
          <Card className="p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Log Your Mood</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMood === mood.value
                      ? `${mood.color} border-current scale-105`
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <div className="text-xs font-medium text-foreground">{mood.label}</div>
                </button>
              ))}
            </div>
            {selectedMood && (
              <Button
                onClick={handleSaveMood}
                disabled={isLoading}
                className="mt-6 bg-primary hover:bg-primary/90 w-full md:w-auto"
              >
                {isLoading ? "Analyzing..." : "Save Mood"}
              </Button>
            )}
          </Card>

          {/* AI Feedback & Recommendations */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* AI Feedback */}
            <Card className="p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    {aiInsight ||
                      "Your mood has been improving this week! Keep up with your self-care routine and consider trying meditation for better stress management."}
                  </p>
                  <Link href="/chatbot">
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-border text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Chat with AI
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Self-Care Suggestion */}
            <Card className="p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Today's Recommendation</h3>
                  <p className="text-sm text-muted-foreground">
                    {recommendations.length > 0
                      ? recommendations[0].description
                      : "Based on your mood, we recommend a 10-minute meditation session. It can help reduce anxiety and improve focus."}
                  </p>
                  <Link href="/self-care">
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-border text-accent hover:bg-accent/10 bg-transparent"
                    >
                      View Plans
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mood Trend */}
            <Card className="p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Mood Trend (This Week)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-primary)", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Self-Care Activities */}
            <Card className="p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Self-Care Completed</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={selfCareData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="activity" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="completed" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
