import React from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/ProductDetail.scss";
import {data} from "../data";
export default function ProductDetail() {
const {id} = useParams();
const product=(data.filter(item=>item.name === id));
const [name]=product;

console.log(name)
  return (
    <div className="product-detail">
        {name.name===id?(
       <div className="product-wrapper">
            <div className="top-product">
                <div className="product-img">
                    {product&&product.map((item, index)=>(
                        <img key={index} src={item.imgUrl} alt={item.className} />
                    ))}
                </div>
                <div className="product-description">
                    <h2>{id}</h2>
                    <table className='responsive-table'>
                        <thead>
                           <tr>
                           <td>Name</td>
                            <td>Description</td>
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Umid</td>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                            <tr>
                                <td>Umid</td>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                            <tr>
                                <td>Umid</td>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                            <tr>
                                <td>Umid</td>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                            <tr>
                                <td>Umid</td>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Category:{name.season}</p>
                </div>
            </div>
       </div>
        ):(
            <div>Page Not found</div>
        )}
    </div>
  )
}
