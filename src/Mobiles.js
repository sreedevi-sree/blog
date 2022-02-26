import React, { useState } from "react";

export function Mobiles() {
  const mobiles = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56fQ--_GubWCUahnHp3qNAZ5Dlzf4361AOQ&usqp=CAU",
      name: "5. Lenovo S930 (Silver, 8 GB)",
      price: "13,499.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkkOc0tjYGJ8e7EPpXEhIj7Eh9Z82LC5sFoc7WGg8onhBmvzumalP05S6s54Ij-1_SUQ&usqp=CAU",
      name: "SAMSUNG Galaxy F22 (Denim Blue, 128 GB)",
      price: "14,999.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG9nY_OuIsVRiH1BTKST8FWFxwBeXPlolbw&usqp=CAU",
      name: "vivo V23 5G (Stardust Black, 256 GB)",
      price: "34,990.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5L9Eg8vd81ROkWK9JT3JE2ZFfrFxCrKwMQw&usqp=CAU",
      name: "APPLE iPhone 12 Mini (Purple, 64 GB)",
      price: "41,299.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhDMq9DfN4AWEL-4CeKeWzeMruZ9U7z3fpA&usqp=CAU",
      name: "OPPO Reno7 5G (Starry Black, 256 GB)",
      price: "28,999.00",
      count: 0,
      counterVal: 1,
      inCart: false
    }
  ];


  const [cart, setCart] = useState(mobiles);
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
