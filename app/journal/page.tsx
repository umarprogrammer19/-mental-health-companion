"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Leaf, TrendingUp, BookOpen, LogOut, Menu, X, Save } from "lucide-react"

export default function JournalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [journalEntry, setJournalEntry] = useState("")
  const [entries, setEntries] = useState([
    {
      id: "1",
      date: "Today",
      title: "Feeling Grateful",
      content: "Had a great day today. Completed my meditation and went for a walk. Feeling more positive.",
      sentiment: "positive",
    },
    {
      id: "2",
      date: "Yesterday",
      title: "Challenging Day",
      content: "Work was stressful, but I managed to stay calm using the breathing techniques.",
      sentiment: "neutral",
    },
  ])

  const handleSaveEntry = () => {
    if (!journalEntry.trim()) return

    const newEntry = {
      id: Date.now().toString(),
      date: "Today",
      title: journalEntry.split("\n")[0].substring(0, 50),
      content: journalEntry,
      sentiment: "neutral" as const,
    }

    setEntries((prev) => [newEntry, ...prev])
    setJournalEntry("")
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800 border-green-300"
      case "negative":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-blue-100 text-blue-800 border-blue-300"
    }
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
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold"
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
        <main className="flex-1 p-6 md:p-8 max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Journal</h1>
            <p className="text-muted-foreground">Write and reflect on your thoughts and feelings</p>
          </div>

          {/* New Entry */}
          <Card className="p-6 mb-8 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">New Entry</h2>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write your thoughts and feelings here..."
              className="w-full h-48 p-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex gap-3 mt-4">
              <Button onClick={handleSaveEntry} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Entry
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                Cancel
              </Button>
            </div>
          </Card>

          {/* Previous Entries */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">Previous Entries</h2>
            {entries.map((entry) => (
              <Card
                key={entry.id}
                className="p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${getSentimentColor(entry.sentiment)}`}
                  >
                    {entry.sentiment.charAt(0).toUpperCase() + entry.sentiment.slice(1)}
                  </span>
                </div>
                <p className="text-muted-foreground line-clamp-3">{entry.content}</p>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
