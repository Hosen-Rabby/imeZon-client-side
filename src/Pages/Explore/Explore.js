import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { useParams } from "react-router-dom";
import css from '../../style/style.css'


const Explore = () => {

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        const uri = 'https://fast-caverns-34943.herokuapp.com/products'
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <>
            <NavBar></NavBar>

            <div className='explore'>
                <Container>
                    <Row>
                        {
                            products.map(product =>
                                <Col lg={4} md={6} key={product._id}>
                                    <div className='product_item'>
                                        <div className='product_img'>
                                            <img src={product.img} className='img-fluid'></img>
                                        </div>
                                        <h2>{product.name}</h2>
                                        <p>{product.shortDes}</p>
                                        <h4>$ {product.price}</h4>
                                        <Link to={`/products/${product._id}`}>
                                            <button className="product_btn">Buy Now</button>
                                        </Link>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Explore;