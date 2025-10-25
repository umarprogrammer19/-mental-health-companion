"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Leaf, TrendingUp, LogOut, Menu, X, CheckCircle2, Circle, BookOpen } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

interface Activity {
  id: string
  title: string
  description: string
  duration: string
  category: string
  completed: boolean
}

export default function SelfCarePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      title: "Morning Meditation",
      description: "Start your day with a 10-minute guided meditation to set a positive tone.",
      duration: "10 min",
      category: "Mindfulness",
      completed: true,
    },
    {
      id: "2",
      title: "Gratitude Journaling",
      description: "Write down 3 things you are grateful for today.",
      duration: "5 min",
      category: "Reflection",
      completed: false,
    },
    {
      id: "3",
      title: "Yoga Session",
      description: "Gentle yoga to improve flexibility and reduce stress.",
      duration: "20 min",
      category: "Exercise",
      completed: false,
    },
    {
      id: "4",
      title: "Nature Walk",
      description: "Take a 30-minute walk in nature to refresh your mind.",
      duration: "30 min",
      category: "Outdoor",
      completed: true,
    },
    {
      id: "5",
      title: "Creative Hobby",
      description: "Engage in your favorite creative activity like drawing or music.",
      duration: "30 min",
      category: "Creativity",
      completed: false,
    },
    {
      id: "6",
      title: "Social Connection",
      description: "Call or meet a friend to strengthen your social bonds.",
      duration: "30 min",
      category: "Social",
      completed: false,
    },
  ])
  const { user, logout } = useAuth()
  const router = useRouter()

  const toggleActivity = (id: string) => {
    setActivities((prev) =>
      prev.map((activity) => (activity.id === id ? { ...activity, completed: !activity.completed } : activity)),
    )
  }

  const completedCount = activities.filter((a) => a.completed).length
  const completionPercentage = Math.round((completedCount / activities.length) * 100)

  const categories = ["All", "Mindfulness", "Reflection", "Exercise", "Outdoor", "Creativity", "Social"]

  const filteredActivities =
    selectedCategory === "All" ? activities : activities.filter((a) => a.category === selectedCategory)

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
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
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
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold"
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Self-Care Plans</h1>
            <p className="text-muted-foreground">Personalized activities to support your mental health</p>
          </div>

          {/* Progress Card */}
          <Card className="p-6 mb-8 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Today's Progress</h2>
              <span className="text-3xl font-bold text-primary">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              {completedCount} of {activities.length} activities completed
            </p>
          </Card>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredActivities.map((activity) => (
              <Card
                key={activity.id}
                className={`p-6 border transition-all cursor-pointer ${
                  activity.completed ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/50"
                }`}
                onClick={() => toggleActivity(activity.id)}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleActivity(activity.id)
                    }}
                    className="mt-1 flex-shrink-0"
                  >
                    {activity.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                    )}
                  </button>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-2 ${activity.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
                    >
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {activity.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{activity.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
