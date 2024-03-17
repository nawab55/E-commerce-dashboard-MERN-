import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct = async () => {
        
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);
        let result = await fetch("http://localhost:3000/add-product", {
            method:'post',
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        navigate('/')
        console.log(result);
    }

    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name" className="inputBox" 
            value={name} onChange={(e)=> setName(e.target.value)}
            />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input type="text" placeholder="Enter product price" className="inputBox"
            value={price} onChange={(e)=> setPrice(e.target.value)}
            />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input type="text" placeholder="Enter product category" className="inputBox"
            value={category} onChange={(e)=> setCategory(e.target.value)}
            />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input type="text" placeholder="Enter product company"  className="inputBox"
            value={company} onChange={(e)=> setCompany(e.target.value)}
            />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;