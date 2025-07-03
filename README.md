# 📓 MyJournal App

A beautiful and secure personal journaling web application built with **Node.js**, **Express**, **EJS**, and **MongoDB**. Users can register, log in, write journal entries, edit/delete them, update account details, and recover forgotten passwords.

---
MyJournal Screenshot

![Screenshot 2025-07-03 150948](https://github.com/user-attachments/assets/c1aad45d-197f-49e5-a59a-20113eb48856)
![Screenshot 2025-07-03 151024](https://github.com/user-attachments/assets/8c8df876-a1e5-4509-b8e9-3c4adfc5e233)
![Screenshot 2025-07-03 151119](https://github.com/user-attachments/assets/adf90c82-48d6-4d06-9d80-590736e3f6d3)
![Screenshot 2025-07-03 151139](https://github.com/user-attachments/assets/83063938-a71a-414f-ac21-f5ff8b4db9a4)


---

## ✨ Features

- 📝 **Compose Entries** — Create, edit, and delete personal journal entries.
- 🔐 **Authentication** — Secure registration and login using hashed passwords with bcrypt.
- 🔄 **Account Management** — Edit account details and delete your account.
- 🔑 **Forgot Password** — Reset password using a security question & answer.
- 🖼️ **Responsive Design** — Clean, journal-themed interface with background image, watermark, and gradient.
- 🗃️ **MongoDB Storage** — Stores user and journal data in MongoDB.

---

## 🚀 Live Demo

You can try the app on [Render](https://myjournal-app-kk1r.onrender.com)

---

## 📦 Tech Stack

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Sessions + bcrypt
- **Deployment**: Render
---
📁 Folder Structure

myjournal_app/
├── models/
│   ├── user.js
│   └── entry.js
├── public/
│   ├── styles.css
│   └── background.png
├── views/
│   ├── index.ejs
│   ├── register.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   ├── compose.ejs
│   ├── edit-entry.ejs
│   ├── edit-account.ejs
│   └── forgot-password.ejs
├── .env
├── .gitattributes
├── .gitignore
├── index.js
├── package.json
└── README.md

---
🛡️ Security Notes

Passwords are securely hashed using bcrypt.

Sessions are used for user authentication.

Password recovery uses security questions instead of email for privacy.

---

🧑‍💻 Author

Mmesomachukwu Anyim

GitHub: @soso-oma


📜 License

This project is for educational and portfolio purposes.
