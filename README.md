# 📓 MyJournal App

A beautiful and secure personal journaling web application built with **Node.js**, **Express**, **EJS**, and **MongoDB**. Users can register, log in, write journal entries, edit/delete them, update account details, and recover forgotten passwords.

---

MyJournal Screenshot

![Screenshot 2025-07-03 170527](https://github.com/user-attachments/assets/0096693c-8a2a-455a-bdf5-185bd6657182)
![Screenshot 2025-07-03 151024](https://github.com/user-attachments/assets/3d3b9dac-1d51-4935-b221-31e1e524367a)
![Screenshot 2025-07-03 151119](https://github.com/user-attachments/assets/c8f3e29f-38d0-46f7-9fd8-af35ca20f1d8)
![Screenshot 2025-07-03 151139](https://github.com/user-attachments/assets/b60a2ff1-7765-47e6-83ef-86d01916ae52)
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
