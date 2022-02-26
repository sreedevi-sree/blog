import React, { useState } from "react";

export function Kids() {
  const kids = [
    {
      image: "https://rukminim1.flixcart.com/image/495/594/kic17rk0-0/shoe/j/1/i/inkline-10-kaitronex-black-original-imafy5hxc7gkqfva.jpeg?q=50",
      name: "Black KAITRONEX Lace Sneakers Shoes For Boys",
      price: "279.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://m.media-amazon.com/images/I/511S43S19gS.jpg",
      name: "AMAZICA Digital Wrist Watch For Boy And Men Smartwatch",
      price: "3,999.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://m.media-amazon.com/images/I/81ROEV2COzL._UX569_.jpg",
      name: "Stanwells Kids Yellow and Magenta Combo Baby Girls Net Lehenga Choli",
      price: "1,850.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W75JTfSfdjDjKBh4ldibRPvxlLzdxA-67Q&usqp=CAU",
      name: "Hi-Fast Kids cycle For 4 Years to 7 Years girls Pink color",
      price: "3,499.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "http://cdn.cdnparenting.com/articles/2018/10/103742639-H.jpg",
      name: "LuvLap SUNSHINE BABY STROLLER Stroller  (3, Blue)",
      price: "4,149",
      count: 0,
      counterVal: 1,
      inCart: false
    }
  ];


  const [cart, setCart] = useState(kids);
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
