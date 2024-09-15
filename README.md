# news-aggregator
This is a fullstack news aggregator website that allows users to sign up, log in, and view news based on their interests. The backend is built using Node.js, Express, and MongoDB, while the frontend is built using React.

### Backend:
- Node.js
- Express
- MongoDB
- HuggingFace API for text summarization
- NewsAPI for fetching news articles

### Frontend:
- React
- React Router DOM
- Axios

## Installation

### Backend
1. Clone the repository.
2. Navigate to the `backend` folder.
3. Run the following command to install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the `backend` directory:
    ```bash
    MONGO_URI=your_mongo_uri
    NEWS_API_KEY=your_news_api_key
    JWT_SECRET=your_jwt_secret
    PORT=5000
    HUGGING_FACE_API_KEY=your_huggingface_api_key
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend
1. Navigate to the `frontend` folder.
2. Run the following command to install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

### MongoDB
You will need a MongoDB Atlas instance for the backend. Replace the `MONGO_URI` in your `.env` with your connection string.
