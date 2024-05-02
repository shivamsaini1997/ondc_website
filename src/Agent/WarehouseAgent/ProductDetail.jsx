import React from 'react'
import Layout from '../../Layout'
import { NavLink } from 'react-router-dom'

export const WarehouseProductDetail = () => {
  return (
    <Layout>
        <div className='mt-3'>
        <NavLink to={"/agent/Product-on-the-way"} className="text-dark">
            <h5 className="mb-0">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black" />
                </svg>
                Products on the way
            </h5>
        </NavLink>
        </div>
        <div className="headprofile px-4 pt-3 border-0 text-center mb-2">
          <h3 className="heading3">Product Details</h3>
       </div>
                <div className="order-detail-box border-bottom p-4 pb-0">
                    <div className="product-order-description d-flex">
                        <div className="product-image">

                        </div>
                        <div>
                        <h3>Product Name</h3>
                        <h3> Description</h3>
                        </div>
                    </div>
                    <div className="product-order-description d-flex mt-3 ORde">
                        <div className="d-flex">
                            <div className="product-image invisible h-25"></div>
                          
                        </div>
                        <div className="ms-2">
                            <h4>SKU Code</h4>
                            <p>4PZFKE</p>
                        </div>
                        <div className="ms-5">
                            <h4>Quantity</h4>
                            <p>1</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid saledetail">
                    <div className="row">
                        <div className="col-lg-6 p-4">
                            <h4>Manufacturer Name & Address: <span>Full Name and address</span></h4>
                            <div className="mt-4">
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Manufactured On</span>
                                    <span>12/02/23</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Uploaded On</span>
                                    <span>12/02/23</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Received On</span>
                                    <span>28/01/23</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Price</span>
                                    <span>₹678</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6 p-4">
                        <h4>Product Description</h4>

                            <div className="mt-4">
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Size</span>
                                    <span>Medium</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Color</span>
                                    <span>Magenta</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Weight</span>
                                    <span>500g</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Materials/Ingredients</span>
                                    <span>-</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Allergens</span>
                                    <span>-</span>
                                </div>
                                <div className="d-flex border-bottom justify-content-between py-1">
                                    <span>Expiry Date</span>
                                    <span>23/09/23</span>
                                </div>
                            </div>
                           
                        </div>
                      
                    </div>
                </div>
    </Layout>
  )
}
