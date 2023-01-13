import React, { useReducer, useState } from "react";
import "./App.css";
import FiterMeals from "./components/FilterMeals/FiterMeals";
import Meals from "./components/Meals/Meals";
import CarContext from "./components/store/CarContext";
import Cart from "./components/cart/Cart";
const cartReducer = (state, action) => {
  const newcart = { ...state };
  switch (action.type) {
    case "add":
      if (newcart.items.indexOf(action.meal) === -1) {
        action.meal.amount = 1;
        newcart.items.push(action.meal);
      } else {
        action.meal.amount += 1;
      }
      newcart.titalMount += 1;
      newcart.totalPrice += action.meal.price;
      return newcart;
    case "reduce":
      if (newcart.items.indexOf(action.meal) === -1) {
      } else {
        action.meal.amount -= 1;
      }
      //当amount为零时记得移除
      if (action.meal.amount === 0) {
        newcart.items.splice(newcart.items.indexOf(action.meal), 1);
      }
      newcart.titalMount < 0
        ? (newcart.titalMount = 0)
        : (newcart.titalMount -= 1);
      newcart.totalPrice < 0
        ? (newcart.totalPrice = 0)
        : (newcart.totalPrice -= action.meal.price);
      return newcart;
    case "clear":
      newcart.items.forEach((item) => {
        item.amount = 0;
      });
      newcart.items = [];
      newcart.titalMount = 0;
      newcart.totalPrice = 0;
      return newcart;
    default:
      return state;
  }
};
//模拟一组食物数据
const Mealsdate = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "./img/meals/1.png",
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "./img/meals/2.png",
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "./img/meals/3.png",
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "./img/meals/4.png",
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "./img/meals/5.png",
  },
  {
    id: "6",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "./img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "./img/meals/7.png",
  },
];
const App = () => {
  const [mealsdate, setmealsdate] = useState(Mealsdate);
  const [carData, cartdispatch] = useReducer(cartReducer, {
    items: [],
    titalMount: 0,
    totalPrice: 0,
  });
  // const [carData, setcarData] = useState({
  //   items: [],
  //   titalMount: 0,
  //   totalPrice: 0,
  // });
  //添加进购物车
  // const addMealHandler = (meal) => {
  //   //meal表示添加进购物车的商品信息
  //   const newcart = { ...carData };
  //   if (newcart.items.indexOf(meal) === -1) {
  //     meal.amount = 1;
  //     newcart.items.push(meal);
  //   } else {
  //     meal.amount += 1;
  //   }
  //   newcart.titalMount += 1;
  //   newcart.totalPrice += meal.price;
  //   setcarData(newcart);
  // };
  //移除购物车
  // const SubMealHandler = (meal) => {
  //   //meal表示添加进购物车的商品信息
  //   const newcart = { ...carData };
  //   if (newcart.items.indexOf(meal) === -1) {
  //   } else {
  //     meal.amount -= 1;
  //   }
  //   //当amount为零时记得移除
  //   if (meal.amount === 0) {
  //     newcart.items.splice(newcart.items.indexOf(meal), 1);
  //   }
  //   newcart.titalMount < 0
  //     ? (newcart.titalMount = 0)
  //     : (newcart.titalMount -= 1);
  //   newcart.totalPrice < 0
  //     ? (newcart.totalPrice = 0)
  //     : (newcart.totalPrice -= meal.price);
  //   setcarData(newcart);
  // };
  //清空购物车
  // const clearCar = () => {
  //   const newcart = { ...carData };
  //   newcart.items.forEach((item) => {
  //     item.amount = 0;
  //   });
  //   newcart.items = [];
  //   newcart.titalMount = 0;
  //   newcart.totalPrice = 0;
  //   setcarData(newcart);
  // };
  const Filterfunction = (keyword) => {
    //这里不能用mealsdate因为会被下面set马上影响
    const newmeal = Mealsdate.filter(
      (items) => items.title.indexOf(keyword) !== -1
    );

    setmealsdate(newmeal);
  };
  return (
    <CarContext.Provider value={{ ...carData, cartdispatch }}>
      <div>
        <FiterMeals Filterfunction={Filterfunction} />
        <Meals mealsdate={mealsdate} />
        <Cart />
      </div>
    </CarContext.Provider>
  );
};

export default App;
