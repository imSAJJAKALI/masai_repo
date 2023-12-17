import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

function SingleProductPage(){
    const val=useParams()
    const [data,setData]=useState({})
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${val.id}`)
        .then((res)=>res.json())
        .then((act)=>setData(act.data))
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return (

        <div data-testid="products-container">   
        {loading?<Loader/>:""}
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={data.img}/>
            </div>
            <div data-testid="product-category">
                {data.category}
            </div>
           
            <div data-testid="product-details">
                {data.details}
            </div>
            <div data-testid="product-price">
                {data.price}
            </div>

            </div>
    )
}
export default SingleProductPage