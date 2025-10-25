"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Leaf, TrendingUp, BookOpen, LogOut, Menu, X } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const moodTrendData = [
  { week: "Week 1", average: 5.2 },
  { week: "Week 2", average: 5.8 },
  { week: "Week 3", average: 6.4 },
  { week: "Week 4", average: 7.1 },
]

const selfCareData = [
  { week: "Week 1", activities: 8 },
  { week: "Week 2", activities: 12 },
  { week: "Week 3", activities: 15 },
  { week: "Week 4", activities: 18 },
]

const sentimentData = [
  { name: "Positive", value: 45 },
  { name: "Neutral", value: 35 },
  { name: "Negative", value: 20 },
]

const COLORS = ["#10b981", "#3b82f6", "#ef4444"]

export default function ProgressPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive">
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
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold"
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Your Progress</h1>
            <p className="text-muted-foreground">Track your mental health journey over time</p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Mood</p>
                  <p className="text-3xl font-bold text-primary">7.1/10</p>
                </div>
                <TrendingUp className="w-12 h-12 text-primary/20" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">↑ 37% improvement this month</p>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Activities Completed</p>
                  <p className="text-3xl font-bold text-accent">53</p>
                </div>
                <Leaf className="w-12 h-12 text-accent/20" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">↑ 18 more than last month</p>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Journal Entries</p>
                  <p className="text-3xl font-bold text-secondary">24</p>
                </div>
                <BookOpen className="w-12 h-12 text-secondary/20" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">Consistent daily writing</p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Mood Trend */}
            <Card className="p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Mood Trend (Monthly)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
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
                    dataKey="average"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-primary)", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Self-Care Activities */}
            <Card className="p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Self-Care Activities (Monthly)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={selfCareData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="activities" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Sentiment Analysis */}
          <Card className="p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Journal Sentiment Distribution</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {sentimentData.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-sm text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Insights */}
          <Card className="p-6 border border-border mt-8 bg-primary/5">
            <h3 className="font-semibold text-foreground mb-4">Key Insights</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Your mood has improved by 37% over the past month. Keep up the great work!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  You're most positive on weekends. Consider incorporating weekend activities into your weekday routine.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Meditation and nature walks have the most positive impact on your mood.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Your journal entries show 45% positive sentiment, indicating good emotional progress.</span>
              </li>
            </ul>
          </Card>
        </main>
      </div>
    </div>
  )
}
