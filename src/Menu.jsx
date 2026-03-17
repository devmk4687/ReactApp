import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { PtagComponent } from "./PtagComponent";
import { SpantagComponent } from "./SpantagComponent";

export const Menu = () => {
   const [order, setOrderText] = useState("");   // ✅ state added

    const handleOrder = (itemName, itemPrice) => {
       
        // alert(`You ordered: ${itemName} for ${itemPrice}`);
        // const text = `You ordered: ${itemName} for ${itemPrice}`;
        setOrderText({
            name: itemName,
            price: itemPrice
        });   // ✅ update state
    }
    return (
       <div>
        <h2>Our Menu</h2>
        <MenuItems item="Pizza" price={10} onOrder={handleOrder} />
        <MenuItems item="Pasta" price={15} onOrder={handleOrder} />
        <MenuItems item="Maggie" price={20} onOrder={handleOrder} />
        <PtagComponent text={order.name} />
        <SpantagComponent amount= {order.price} />
       </div>
        
    )
}