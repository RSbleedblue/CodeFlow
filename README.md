# CodeFlow

CodeFlow is a comprehensive web application that replicates the functionality of CodePen with several additional features. It provides an online code editor and compiler supporting multiple languages, along with a specialized section for web development projects. The application uses Firebase for user authentication, data storage, and real-time updates.

## Features

- **Online Compiler**: Compile and run code in multiple programming languages directly in the browser.
- **Web Development Section**: A dedicated area for HTML, CSS, and JavaScript projects with real-time preview.
- **User Authentication**: Secure user sign-up and login using Firebase Authentication.
- **Post Management**: Create, share, and view posts with user-specific data stored in Firebase Firestore.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and Material-UI.

## Tech Stack

- **Frontend**: React (with Vite), Tailwind CSS, Material-UI
- **Backend**: Firebase Authentication, Firebase Firestore
- **Compiler API**: [Online Compiler API] (or any other service you might have used)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/codeflow.git
    cd codeflow
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Copy the Firebase config object and replace the placeholders in the `firebaseConfig.js` file.
    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };
    ```

4. **Run the application**:
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173`.

## Usage

- **Sign Up / Login**: Register a new account or log in with an existing account.
- **Create Post**: Start a new project, write code, and save it as a post.
- **Share Post**: Share your posts with others via a unique URL.
- **View Posts**: Browse and view posts from other users.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

---

Feel free to customize this README file further to better match your project's specifics and requirements.