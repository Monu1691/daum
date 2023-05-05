import React from 'react'
import HeaderTop from './components/header-top'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const {cartValue}  = useSelector((state)=> state.changeNumber);
    
    return (
        <>
            <header className="site-header">
                <HeaderTop />

                <section className="ad-header-main">
                    <div className="ad-container">
                        <div className="ad-header-main-row">
                            <div className="ad-header-logo">
                                <Link to="/">
                                    <img src="./img/footer-logo.png" alt="Logo" />
                                </Link>
                            </div>

                            <div className="ad-header-icons-wrapp">
                                <div className="ad-head-serach">
                                    <button type="submit" title="Search" className="sub-search" aria-label="Search">
                                        <img src="./img/search.png" alt="Search" />
                                    </button>
                                    <input id="search" type="text" name="q" placeholder="Search" className="search-text" />
                                </div>
                                
                                <ul className="icon-list">
                                    <li><a href={() => false}><img src="./img/user.png" alt="user" /></a></li>
                                    <li><a href={() => false}><img src="./img/favorite.png" alt="favorite" /></a></li>
                                    <li><a href={() => false}><img src="./img/bucket.png" alt="bucket" /> {cartValue}</a></li>
                                </ul>
                            </div>
                        </div>

                        <nav className="ad-main-navigation">
                            <ul className="ad-main-menu">
                                <li>
                                    <Link to="/">Home</Link>
                                    <span className="drop-icon"><i className="fa-solid fa-chevron-down"></i></span>
                                    <ul>
                                        <li><a href={() => false}>Skin Whitening</a></li>
                                        <li><a href={() => false}>Radiance Cream</a></li>
                                        <li><a href={() => false}>Lip Balm</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                    <span className="drop-icon"><i className="fa-solid fa-chevron-down"></i></span>
                                    <ul>
                                        <li><a href={() => false}>lip care 1</a></li>
                                        <li><a href={() => false}>lip care 2</a></li>
                                        <li><a href={() => false}>lip care 3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/product-single">Product Single</Link>
                                    <span className="drop-icon"><i className="fa-solid fa-chevron-down"></i></span>
                                    <ul>
                                        <li><a href={() => false}>eye care 1</a></li>
                                        <li><a href={() => false}>eye care 2</a></li>
                                        <li><a href={() => false}>eye care 3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/search">serach</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
