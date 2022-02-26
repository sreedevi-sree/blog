import React, { useState } from "react";

export function Toys() {
  const toys = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5YkrqsXIvI-JqqAE6i_TVk91Jcyox8UWGQ&usqp=CAU",
      name: "Kids Electic Cars",
      price: "10,500.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZSCSYlQnTRAG67tqbGs-oSvorc6WMhgtpQ&usqp=CAU",
      name: "Barbie Girls Toys for Kids",
      price: "450.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRPoqPhswRlNRom5M7vSpq9IoS2IjkR9cpw&usqp=CAU",
      name: "Rattle for just New born babies",
      price: "150.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcvSe1Q_0NMD4-12jL71w_WhVbHeGfQHZsQ&usqp=CAU",
      name: "Battery Operated Train with Track Toys for Kids",
      price: "400.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEamXFODIggAgQ9Il_r736pudbac67jbdTQ&usqp=CAU",
      name: "Teddy Bear With Heart Soft Toy For kids",
      price: "650.00",
      count: 0,
      counterVal: 1,
      inCart: false
    }
  ];


  const [cart, setCart] = useState(toys);
  const addToCart = (i) => {
    setCart((prevState) => prevState.map((item, o) => {
      if (i === o) {
        return {
          ...item,
          inCart: true,
          count: item.counterVal
        };
      }
      return item;
    })
    );
  };
  const increaseQuantity = (i) => {
    setCart((prevCart) => prevCart.map((item, o) => {
      if (i === o && item.inCart) {
        if (item.count > 9) {
          return item;
        } else
          return { ...item, count: item.count + 1 };
      } else if (i === o) {
        if (item.counterVal > 9) {
          return item;
        }
        else
          return {
            ...item,
            counterVal: item.counterVal + 1
          };
      }
      return item;
    })
    );
  };
  const decreaseQuantity = (i) => {
    setCart((prevCart) => prevCart.map((item, o) => {
      if (i === o && item.inCart) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      } else if (i === o && item.counterVal > 1) {
        return {
          ...item,
          counterVal: item.counterVal - 1
        };
      }
      return item;
    })
    );
  };
  const removeFromCart = (i) => {
    setCart((prevCart) => prevCart.map((item, o) => {
      if (i === o) {
        return {
          ...item,
          count: 0,
          counterVal: 1,
          inCart: false
        };
      }
      return item;
    })
    );
  };
  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + parseInt(item.price) * item.count,
    0
  );
  const cartTotals = () => cartCountTotal === 0 ? (
    <b>Cart </b>
  ) : (
    <>
      <b>
        <p>Items in Cart: {cartCountTotal}</p>
        <p>Total Price: ${cartPriceTotal}</p>
      </b>
    </>
  );
  const cartItems = cart.map((item, i) => (
    <React.Fragment key={item.name}>
      {item.inCart && (
        <>
          <p> Item Name: {item.name}</p>
          <p>
            Item Count: <button onClick={() => decreaseQuantity(i)}>-</button>{" "}
            {item.count} <button onClick={() => increaseQuantity(i)}>+</button>
          </p>
          <p>
            Item Subtotal: $
            {Number.isInteger(item.count * parseInt(item.price))
              ? item.count * parseInt(item.price)
              : `${(item.count * parseInt(item.price)).toFixed(2)}`}
          </p>
          <button onClick={() => removeFromCart(i)}>Remove From Cart</button>
          <hr />
        </>
      )}
    </React.Fragment>
  ));
  const cartProducts = () => (
    <div className="mensfashion">
      {cart.map((item, i) => (
        <div className="mensproducts" key={item.name}>
          {/* <p >{item.image}</p> */}
          <img className="image" src={item.image} alt="none"></img>
          <p>{item.name}</p>
          <p> ${item.price}</p>
          {!item.inCart ? (
            <>
              {item.name === "Fancy Product" ?
                <button>View Options</button> :
                <button onClick={() => addToCart(i)}>Add to cart</button>}
            </>
          ) : (
            <p>
              <b>Item added!</b>
            </p>
          )}
        </div>
      ))}{" "}
    </div>
  );
  return (
    <div>
      {cartItems}
      {cartTotals()}
      {cartProducts()}
    </div>
  );
}
