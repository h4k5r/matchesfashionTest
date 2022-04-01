import '../AdditionalFiles/App.css';
import * as React from "react";
import {useEffect, useState} from "react";
import Product from "./product/product";

//This is the API url to fetch from
const API_URL = 'https://matchesfashion.com/api/products';
const TAX_RATE = 0.08;
const fetchProducts = async (pageNumber) => {
    return (await fetch(`${API_URL}+&page=${pageNumber}`)).json()
}

function YourSolution() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        (async () => {
            try {
                const response = await fetchProducts(currentPage)
                setProducts(response.products)

            } catch (e) {
                console.log("Failed to fetch")
            }
        })()

    }, [currentPage])

    const firstClick = () => {
        setCurrentPage(0)
    }

    const prevClick = () => {
        setCurrentPage(page => {
            if (page > 0) return page - 1;
            else return page;
        })
    }

    const nextClick = () => {
        setCurrentPage(page => {
            if (page < 5) return page + 1;
            else return page;
        })

    }

    const lastClick = () => {
        setCurrentPage(5)
    }

    return (
        <div className="App">
            <table id="products">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Quantity Sold</th>
                    <th>Sold Price</th>
                    <th>Cost To Business</th>
                    <th>Profit after Tax</th>
                </tr>
                </thead>
                <tbody>
                {products.map((value, index) => <Product key={index} product={value} taxRate={TAX_RATE}/>)}
                </tbody>
            </table>
            <button disabled={currentPage <= 0} onClick={firstClick}>
                First Page
            </button>
            <button disabled={currentPage <= 0} onClick={prevClick}>
                Previous Page
            </button>
            <button disabled={currentPage >= 5} onClick={nextClick}>
                Next Page
            </button>
            <button disabled={currentPage >= 5} onClick={lastClick}>
                Last Page
            </button>
        </div>);
}

export default YourSolution;
