
export const MenuItems = ({item, price, onOrder}) => {
    return (
    <div>
        <span> {item} - ${price}</span>
        <button onClick={() => onOrder(item, price)}>Order</button>
    </div>
    );
}