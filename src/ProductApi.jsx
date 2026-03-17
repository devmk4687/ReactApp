import { useEffect, useState } from "react";
import axios from "axios";

function ProductApi() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            });
    }, []);

    return ( 
        <div className="container" style={{display: "flex", gap: "16px", alignItems: "stretch"}}>
            <h1>Product Api</h1>
            <div className="row" style={{flex: 1,}}>
                {products.map(product => (
                    <div className="col-md-4" key={product.id} >
                        <div className="card" >
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default ProductApi;