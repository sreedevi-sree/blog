import React, { useState } from "react";

export function Mensfashion() {
  const mensfashion = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fCbaG9iQeXt4N_RFk6DKCoogXG_14xx0CQ&usqp=CAU",
      name: "Men's Casual Long Sleeve Shirt",
      price: "800.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UdtjfOlryr7qV7Uf8vNZbYY66BFkRZTQ-w&usqp=CAU",
      name: "Men's casual short T-shirt",
      price: "500",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614016392-todd-snyder-1614016383.jpg",
      name: "Men's casual Jeans pant",
      price: "1500",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKKi9YavbB6h9gBVpwmBZQr7YMZDtM1Y4pA&usqp=CAU",
      name: "Luxury Genuine Leather Belt For Men",
      price: "40.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvXQx0Rpjobsw2rG2dRSaDjLb5LKiu8t_qw&usqp=CAU",
      name: "HMTr 7088-SILVER DAY&DATE Stainless Steel Analog Men's Watch",
      price: "450",
      count: 0,
      counterVal: 1,
      inCart: false
    }
  ];


  const [cart, setCart] = useState(mensfashion);

  
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


