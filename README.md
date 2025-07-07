# 📓 MyJournal App

A beautiful and secure personal journaling web application built with **Node.js**, **Express**, **EJS**, and **MongoDB**. Users can register, log in, write journal entries, edit/delete them, update account details, and recover forgotten passwords.

---

MyJournal Screenshot

![Screenshot 2025-07-03 170527](https://github.com/user-attachments/assets/3ef04ef8-5018-4518-ac41-1945358df3ef)
![Screenshot 2025-07-06 224036](https://github.com/user-attachments/assets/daea6832-162c-480b-a8f2-e8f76af1e94d)
![Screenshot 2025-07-06 224527](https://github.com/user-attachments/assets/12d81d94-189c-4da7-85b2-178c4a440e45)
![Screenshot 2025-07-06 224628](https://github.com/user-attachments/assets/a85e8268-d4bd-404f-8b34-ad26b3c670e0)

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

You can try the app on [Render](https://myjournal-app-kygs.onrender.com)

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
