import React, { useState } from "react";

export function Girlsfashion() {
  const girlfashion = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7E9JqUWB55Wx_VOfT19AJO99nKTy15dlRQ&usqp=CAU",
      name: "Women's Casual Long Jeans Top",
      price: "450.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://fcity.in/images/products/13024444/923a7_512.jpg",
      name: "Cute Women's stylish kurtis & kurtas",
      price: "950",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5c2jU7NOtYW6MAzevLYQh5VBO_IMNPjwcw&usqp=CAU",
      name: "Indian Traditional Beautiful young girl saree",
      price: "1500",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://staticimg.titan.co.in/Fastrack/Catalog/6222SL03_1.jpg?pView=listing",
      name: "Luxury Genuine Leather Belt For Men",
      price: "40.00",
      count: 0,
      counterVal: 1,
      inCart: false
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCXX1c9tX84tY-_DGfJQ_BsO8qKk8L6kP7w&usqp=CAU",
      name: "Kids Handbags & Purses for Girls",
      price: "650",
      count: 0,
      counterVal: 1,
      inCart: false
    }
  ];


  const [cart, setCart] = useState(girlfashion);
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
