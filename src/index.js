import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu: </h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Welcome to Fast React Pizza! We serve the best pizza all over the
            town! Affordable prices with explendid taste!
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu</p>
      )}

      {/* <Pizza
        name="Pizza Focaccia"
        ingredient="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Salamino"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={13}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza CO. </h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const opening = 9;
  const closing = 20;
  let isOpen;

  if (hour >= opening && hour <= closing) {
    isOpen = "We're Open!";
  } else {
    isOpen = "Sorry we're close!";
  }
  return (
    <footer className="footer">
      <div className="order">
        <Order isItOpen={isOpen} openHour={opening} closingHour={closing} />
        <button className="btn">Order now</button>
      </div>
    </footer>
  );
}

function Order({ isItOpen, openHour, closingHour }) {
  let msg;
  if (isItOpen === "We're Open!") {
    msg = `We're open from ${openHour}:00 until ${closingHour}:00`;
  } else {
    msg = `Sorry we're closed! Come back again at ${openHour}:00`;
  }

  return (
    <div>
      <p> {msg} </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
