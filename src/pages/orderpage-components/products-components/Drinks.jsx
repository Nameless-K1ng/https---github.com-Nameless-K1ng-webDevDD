import brewedCoffee from "./assets/drinks/brewed_coffee.png";
import hotChoco from "./assets/drinks/hot_choco.png";
import hotLatte from "./assets/drinks/hot_latte.png";
import icedCoffee from "./assets/drinks/iced_coffee.png";
import icedCoffeeHazelnut from "./assets/drinks/iced_coffee_hazelnut.png";
import icedCoffeeAlmond from "./assets/drinks/iced_coffee_almond.png";
import icedMacchiato from "./assets/drinks/iced_macchiato.png";
import icedSpanishLatte from "./assets/drinks/iced_spanish_latte.png";
import icedStrawberryCheesecakeLatte from "./assets/drinks/iced_strawberry_cheesecake_latte.png";
import icyChocojava from "./assets/drinks/icy_choco_java.png";
import "./productTypes.css";
import Item from "../../admin-components/product-components/Item";

export default function Drinks({ handleItemClick }) {
  const price = 100;
  return (
    <div className="prodContainer">
      <Item
        id={24}
        name={"Brewed Coffee"}
        img={brewedCoffee}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={25}
        name={"Hot Choco"}
        img={hotChoco}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={26}
        name={"Hot Latte"}
        img={hotLatte}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={27}
        name={"Iced Coffee"}
        img={icedCoffee}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={28}
        name={"Iced Coffee Hazelnut"}
        img={icedCoffeeHazelnut}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={29}
        name={"Iced Spanish Latte"}
        img={icedSpanishLatte}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={30}
        name={"Iced Macchiato"}
        img={icedMacchiato}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={31}
        name={"Iced Strawberry Cheesecake Latte"}
        img={icedStrawberryCheesecakeLatte}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={32}
        name={"Icy Choco Java"}
        img={icyChocojava}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
      <Item
        id={33}
        name={"Iced Coffee Almond"}
        img={icedCoffeeAlmond}
        price={price}
        handleItemClick={handleItemClick}
        type={"drink"}
      />
    </div>
  );
}
