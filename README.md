# Crypto Price Tracker

A simple React-based cryptocurrency tracker that displays the current prices of **Bitcoin**, **Ethereum**, and **Dogecoin (DOGE)**. The app fetches real-time data from the [CoinGecko API](https://www.coingecko.com/en/api) and updates automatically every minute.

---

## Live Demo

Check out the deployed app here: [Crypto Price Tracker](https://crypto-price-tracker-grey.netlify.app/)

---

## Features

- View current prices for Bitcoin, Ethereum, and Dogecoin.
- Automatic price updates every 60 seconds.
- Last updated timestamp displayed for each cryptocurrency.
- Switch between cryptocurrencies using easy-to-use buttons.
- Responsive layout with a navbar and footer.
- Deployed as a static site (e.g., on Netlify).

---

## Components

- **Navbar.jsx** – Displays the app title and available currency icons.
- **Footer.jsx** – Displays copyright info with a link to GitHub.
- **Bitcoin.jsx**, **Ethereum.jsx**, **Doge.jsx** – Each fetches the price for its respective cryptocurrency and displays it with the last updated time.
- **App.jsx** – Main component that manages state for selected cryptocurrency and renders the corresponding component.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ayiman29/crypto-price-tracker.git
````

2. Navigate into the project folder:

```bash
cd crypto-price-tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

* Click on the **Bitcoin**, **Ethereum**, or **DOGE** buttons to view the current price of that cryptocurrency.
* Prices refresh automatically every 60 seconds.
* The “Last updated” timestamp shows the time of the most recent API fetch.

---

## Deployment

This React app can be deployed as a **static site** on services like:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

**Note:** The CoinGecko API has rate limits. Frequent page refreshes may temporarily hit the API limit.

---

## API Reference

* [CoinGecko Simple Price API](https://www.coingecko.com/en/api/documentation)

Example request used in components:

```js
fetch("https://api.coingecko.com/api/v3/simple/price?ids=doge&vs_currencies=usd")
  .then(res => res.json())
  .then(data => setPrice(data.doge.usd));
```

---

Happy coding or whatever they say <3
