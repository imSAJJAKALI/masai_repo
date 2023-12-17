import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function ProductsTable({data}){
    console.log(data)
    
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data.map((item) => 
                        // <tr>
                        //     <td data-testid="item">{item.id}</td>
                        //     <td data-testid="brand">
                        //         <Link to={`/products/${item.id}`}>
                        //         {item.brand}
                        //         </Link>
                        //         </td>
                        //     <td data-testid="category">{item.category}</td>
                        //     <td data-testid="price">{item.price}</td>
                        // </tr>
                    //  console.log(item.id)
                    <ProductCard brand={item.brand} category={item.category} price={item.price} id={item.id} />
                    )}
                </tbody>
            </table>
    )
}

export default ProductsTable