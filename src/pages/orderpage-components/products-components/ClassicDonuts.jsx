import chocosprinkle from "./assets/classics/choco_sprinkle.png";
import strawberrysprinkle from "./assets/classics/strawberry_sprinkle.png";
import bavarianFilled from "./assets/classics/bavarian_filled.png";
import bostonKreme from "./assets/classics/boston_kreme.png";
import nuttyChoco from "./assets/classics/nutty_choco.png";
import sugarRaised from "./assets/classics/sugar_raised.png";
import vanillaSprinkle from "./assets/classics/vanilla_sprinkle.png";
import chocoMarble from "./assets/classics/choco_marble.png";
import coffeeCrunch from "./assets/classics/coffee_crunch.png";
import coffeeNut from "./assets/classics/coffee_nut.png";
import mellonFrosted from "./assets/classics/mellon_frosted.png";
import nuttyStrawberry from "./assets/classics/nutty_strawberry.png";
import nuttyUbe from "./assets/classics/nutty_ube.png";
import "./productTypes.css";
import Item from "../../admin-components/product-components/Item";

export default function ClassicDonuts({ handleItemClick }) {
  const price = 40;

  return (
    <div className="prodContainer">
      <Item
        id={1}
        name={"Bavarian"}
        img={bavarianFilled}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={2}
        name={"Choco Sprinkle"}
        img={chocosprinkle}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={3}
        name={"Strawberry Sprinkle"}
        img={strawberrysprinkle}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={4}
        name={"Nutty Choco"}
        img={nuttyChoco}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={5}
        name={"Sugar Raised"}
        img={sugarRaised}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={6}
        name={"Vanilla Sprinkle"}
        img={vanillaSprinkle}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={7}
        name={"Choco Marble"}
        img={chocoMarble}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={8}
        name={"Coffee Crunch"}
        img={coffeeCrunch}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={9}
        name={"Coffee Nut"}
        img={coffeeNut}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={10}
        name={"Mellon Frosted"}
        img={mellonFrosted}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={11}
        name={"Nutty Strawberry"}
        img={nuttyStrawberry}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={12}
        name={"Nutty Ube"}
        img={nuttyUbe}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
      <Item
        id={13}
        name={"Boston Kreme"}
        img={bostonKreme}
        price={price}
        handleItemClick={handleItemClick}
        type={"Classic"}
      />
    </div>
  );
}
