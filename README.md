
## Run Locally

**Prerequisites:**  Node.js


1.  To install:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. for running the Run the app:
   `npm run dev`
his project is developed as part of the Qualifier 1 assessment for Chitkara University.

It implements two public REST APIs: POST /bfhl and GET /health.

The project is built using Node.js and Express.

All APIs follow strict response structures and correct HTTP status codes.

Input validation and graceful error handling are implemented to avoid crashes.

The POST /bfhl API supports Fibonacci, prime numbers, LCM, HCF, and AI-based responses.

Google Gemini API is integrated for AI question answering.

The project is publicly deployed and production-ready as per evaluation guidelines.