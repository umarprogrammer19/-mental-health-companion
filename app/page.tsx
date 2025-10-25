"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Leaf, TrendingUp, MessageCircle, BookOpen } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MindCare</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Your Personal Mental Health Companion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your mood, receive AI-driven therapy support, and discover personalized self-care recommendations
            tailored to your emotional needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Get Started Free
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Hero Image Placeholder */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border h-96 flex items-center justify-center mb-20">
          <div className="text-center">
            <Heart className="w-24 h-24 text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Your wellness journey starts here</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Comprehensive Mental Health Support</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Mood Tracking</h3>
            <p className="text-muted-foreground">
              Log your daily mood and visualize patterns over time with intuitive charts and insights.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">AI Therapy Support</h3>
            <p className="text-muted-foreground">
              Chat with our AI-powered therapist for CBT exercises and emotional support anytime.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Self-Care Plans</h3>
            <p className="text-muted-foreground">
              Receive personalized self-care recommendations based on your mood and preferences.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Voice Support</h3>
            <p className="text-muted-foreground">
              Speak your thoughts and feelings with our voice-enabled AI assistant.
            </p>
          </Card>

          {/* Feature 5 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Journal Entries</h3>
            <p className="text-muted-foreground">
              Write and reflect on your thoughts with AI-powered sentiment analysis.
            </p>
          </Card>

          {/* Feature 6 */}
          <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Progress Insights</h3>
            <p className="text-muted-foreground">
              Track your mental health journey with detailed progress reports and trends.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Start Your Mental Health Journey Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who are improving their mental health with MindCare.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Get Started Free
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">MindCare</span>
              </div>
              <p className="text-sm text-muted-foreground">Your personal mental health companion.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 MindCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
