# 📚 KirjaSwappi - Book Details Page

This project is a responsive **Book Details Interface** for a fictional book-swapping app called **KirjaSwappi**. The goal of this screen is to display a book's information, its current condition, language, and under what conditions it's available for exchange.

## 🚀 Live Demo

👉 [View Live Demo] : https://kirjaswappi-app.vercel.app

---

## 📌 Features

- 📘 Displays book details (title, author, description)
- 🔁 Dynamically changes view based on swap conditions:
  - Swap by specific books
  - Swap by genres
  - Open for offers
- 📱 Fully responsive layout
- 🌐 Integrates with external API using Axios
- ⚡ Live condition-based rendering
- 🎨 Styled using TailwindCSS
- 🧩 Modular and reusable components

---

## 📖 App Overview

The Book Details screen fetches data from an external API and renders dynamic UI components depending on the **swap condition** defined for each book.

Each book can be swapped under different conditions:

| Condition Type    | Description                                          |
|------------------|------------------------------------------------------|
| `ByBooks`        | The user is willing to swap this book for specific other books |
| `ByGenres`       | The user accepts swaps for books from specific genres |
| `OpenForOffers`  | The user is open to any offer or suggestion          |
| `GiveAway`       | Not implemented (as per project scope)               |

---

## ⚙️ How the View Changes Based on Condition

In the component `BookConditionSection`, once the data is fetched, the UI changes dynamically based on the `swapCondition.conditionType` value:

```jsx
const condition = book[0].swapCondition.conditionType;
