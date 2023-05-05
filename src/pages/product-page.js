import React, { useEffect, useState } from 'react'

import AdLoader from '../layout/components/ad-loader'
import ProductCard from './product-components/ProductCard';

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const productsFunc = async () => {
            setIsLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');

            const res = await response.json();
            setProducts(res);
            setIsLoading(false);
        }
        productsFunc();
    }, []);

    if (isLoading) {
        return <AdLoader />;
    }

    const recordPerPage = 5;
    const lastIndexPage = currentPage * recordPerPage;
    const firstIndexPage = lastIndexPage - recordPerPage;

    const records = products.slice(firstIndexPage / recordPerPage);
    const nPage = Math.ceil(products.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const changeCPage = () =>{

    }
    const prePage = () =>{
        setCurrentPage(records.id);
    }
    const nextPage = () =>{
        
    }

    return (
        <>
            <main className="site-main">

                <section className="products-wrapp-section">
                    <div className="ad-container">
                        <div className="products-wrapp-row">
                            {records.map((pData) => {
                                const { id, image, price, category, title, description } = pData;
                                return (
                                    <>
                                        <ProductCard key={id} image={image} actualPrice={price - 5} offerPrice={price} category={category} title={title} txt={description} />
                                    </>
                                )
                            })}
                        </div>

                        <ul>
                            <li><a href={()=> false} onClick={prePage}>Prev</a></li>
                            {
                                numbers.map((n, i) => {
                                    return (
                                        <li><a href={()=> false} key={i} onClick={changeCPage}>{n}</a></li>
                                    );
                                })
                            }
                            <li><a href={()=> false} onClick={nextPage}>Next</a></li>
                        </ul>
                    </div>
                </section>

            </main>
        </>
    )
}

export default ProductPage
