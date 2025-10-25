# MindCare - Mental Health Companion App Setup Guide

## Overview
MindCare is an AI-powered mental health companion app built with Next.js, Firebase, and Google Gemini AI. It provides mood tracking, AI-driven therapy (CBT), and personalized self-care recommendations.

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- A GitHub account

## Installation Steps

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/mindcare.git
cd mindcare
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables Setup
Create a `.env.local` file in the root directory with the following variables:

\`\`\`env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB9BNATSjIcBJAVteyzPCkHNpgOcGDSJ58
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=mental-health-companion-uzass.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=mental-health-companion-uzass
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=mental-health-companion-uzass.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=511047284013
NEXT_PUBLIC_FIREBASE_APP_ID=1:511047284013:web:3d1b8416efd6d324e0cfa4
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-JQQPRRSZYH

# Gemini API Key
GEMINI_API_KEY=AIzaSyDh1Wn6AGEGngPcA_bMCABK0f5Fi9neq2g

# ElevenLabs API Key
ELEVEN_LABS_KEY=sk_2058d344de7b05898a4b23bc78c657d7dabc94d86f2f6673
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

The app will be available at `http://localhost:3000`

## Features

### Authentication
- Email/Password signup and login
- Google OAuth integration
- Firebase Authentication

### Dashboard
- Mood tracking with emoji selection
- AI-generated insights based on mood
- Personalized self-care recommendations
- Mood trend charts

### AI Chatbot
- Real-time chat with Gemini AI
- CBT-based emotional support
- Voice input support (Web Speech API)
- Conversation history

### Journal
- Write and save journal entries
- Automatic sentiment analysis using Gemini
- Sentiment badges (positive, negative, neutral)
- Entry history

### Self-Care
- Personalized activity recommendations
- Category filtering
- Progress tracking
- Activity completion checklist

### Progress Tracking
- Mood trends visualization
- Self-care activity statistics
- Sentiment distribution analysis
- Key insights

## Project Structure

\`\`\`
mindcare/
├── app/
│   ├── api/
│   │   ├── gemini/
│   │   │   ├── chat/route.ts          # AI chatbot endpoint
│   │   │   ├── sentiment/route.ts     # Sentiment analysis endpoint
│   │   │   └── recommendations/route.ts # Recommendations endpoint
│   │   └── elevenlabs/
│   │       └── speak/route.ts         # Text-to-speech endpoint
│   ├── login/page.tsx                 # Login page
│   ├── signup/page.tsx                # Sign-up page
│   ├── dashboard/page.tsx             # Main dashboard
│   ├── chatbot/page.tsx               # AI chatbot page
│   ├── self-care/page.tsx             # Self-care recommendations
│   ├── journal/page.tsx               # Journal entries
│   ├── progress/page.tsx              # Progress tracking
│   ├── layout.tsx                     # Root layout
│   └── globals.css                    # Global styles
├── lib/
│   ├── firebase.ts                    # Firebase configuration
│   └── auth-context.tsx               # Authentication context
├── components/
│   └── ui/                            # shadcn/ui components
├── .env.local                         # Environment variables
└── package.json                       # Dependencies
\`\`\`

## API Endpoints

### Gemini AI Endpoints

#### Chat Endpoint
- **URL**: `/api/gemini/chat`
- **Method**: POST
- **Body**: `{ message: string, conversationHistory: Message[] }`
- **Response**: `{ text: string }`

#### Sentiment Analysis Endpoint
- **URL**: `/api/gemini/sentiment`
- **Method**: POST
- **Body**: `{ text: string }`
- **Response**: `{ sentiment: "positive" | "negative" | "neutral", score: number, analysis: string }`

#### Recommendations Endpoint
- **URL**: `/api/gemini/recommendations`
- **Method**: POST
- **Body**: `{ mood: string, recentMoods: any[] }`
- **Response**: `{ recommendations: Activity[] }`

### ElevenLabs Endpoint

#### Text-to-Speech Endpoint
- **URL**: `/api/elevenlabs/speak`
- **Method**: POST
- **Body**: `{ text: string }`
- **Response**: Audio stream (audio/mpeg)

## Technologies Used

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI**: Google Gemini API
- **Voice**: ElevenLabs API, Web Speech API
- **Charts**: Recharts
- **Icons**: Lucide React

## Deployment

### Deploy to Vercel

1. Push your code to GitHub:
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select your repository
4. Add environment variables in the Vercel dashboard
5. Click "Deploy"

### Deploy to Other Platforms

The app can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render

## Troubleshooting

### Firebase Connection Issues
- Verify all Firebase environment variables are correct
- Check Firebase project settings in the console
- Ensure Firebase is initialized before use

### Gemini API Errors
- Verify GEMINI_API_KEY is valid
- Check API quota in Google Cloud Console
- Ensure API is enabled in your Google Cloud project

### ElevenLabs Issues
- Verify ELEVEN_LABS_KEY is correct
- Check API usage in ElevenLabs dashboard
- Ensure voice ID is valid

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@mindcare.app or open an issue on GitHub.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Video therapy sessions
- [ ] Community features
- [ ] Advanced analytics
- [ ] Integration with wearables
- [ ] Offline mode
- [ ] Multi-language support
