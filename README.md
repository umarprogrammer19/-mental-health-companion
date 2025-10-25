# AI-Powered Mental Health App

## Project Summary

This project is an **AI-powered mental health app** designed to provide **mood tracking**, **AI-driven therapy (CBT)**, and **personalized self-care recommendations**. The app leverages **Firebase** for user authentication and real-time data storage, and **Gemini** and **ElevenLabs** for AI-powered features such as **sentiment analysis**, **chatbot interactions**, and **voice input/output**.

### Key Features:
- **Mood Tracking**: Allows users to log their mood on a daily basis.
- **AI-Driven Chatbot**: Provides **CBT-based** emotional support and coping strategies.
- **Self-Care Recommendations**: Offers personalized activities to improve mental health based on mood data.
- **Voice Input/Output**: Users can interact with the app using voice, powered by **ElevenLabs**.
- **Progress Tracking**: Visualize mood trends and self-care progress over time.

## Live Demo

**Live Demo Link**: [Insert live demo link here]

*Note: This demo shows the core features like mood tracking, chatbot interaction, and self-care recommendations.*

## Setup and Run

### Prerequisites:
- **Node.js** (v14 or later)
- **Firebase account** (for authentication and data storage)
- **Gemini API Key** (for AI-based functionalities)
- **ElevenLabs API Key** (for voice input/output)

### Steps to Set Up:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mental-health-app.git
   cd mental-health-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firebase Authentication** and **Firestore**.
   - Add your Firebase credentials to the `.env.local` file:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```

4. Set up **Gemini** and **ElevenLabs**:
   - Obtain API keys from **Gemini** and **ElevenLabs** and add them to `.env.local`:
     ```
     NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
     NEXT_PUBLIC_ELEVENLABS_API_KEY=your-elevenlabs-api-key
     ```

5. Run the app:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Expected Inputs and Outputs

- **User Input**:
  - Mood data (text input).
  - Journal entries (text input).
  - Chatbot conversation (text input or voice input).

- **Outputs**:
  - **Mood logs** saved to Firebase.
  - **CBT-based responses** from Gemini.
  - **Personalized self-care recommendations**.
  - **Speech output** from ElevenLabs (for voice responses).

---

### **Contributing**

We welcome contributions to improve the app! If you would like to contribute, please follow the steps below.

1. Fork the repository to your GitHub account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/mental-health-app.git
   cd mental-health-app
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes and test them.
5. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
6. Push to your fork:
   ```bash
   git push origin feature-name
   ```
7. Submit a pull request to the `main` branch of the original repository.

This project is licensed under the [MIT License](./LICENSE).
