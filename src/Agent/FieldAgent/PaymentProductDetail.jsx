import React, { useEffect, useState } from 'react'
import Layout from '../../../Layout'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const FiledAgentProductDetail = () => {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const [data, setData] = useState(null);
   const userId = localStorage.getItem('User_Id');
   const { id } = useParams();
   const navigate = useNavigate();
    console.log(userId);

    useEffect(() => {
        axios.post(`${baseUrl}/Agent/Get_Product_Detail_By_Agent`,{
            product_id :id
       })
       .then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
       })
        
     },[])
     const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
      }

  return (
    <Layout>
        <div className='mt-3'>
        <NavLink
               onClick={() => {
                navigate(-1);
              }}
        className="text-dark">
            <h5 className="mb-0">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black" />
                </svg>
                Products List
            </h5>
        </NavLink>
        </div>
        <div className="headprofile px-4 pt-3 border-0 text-center mb-2">
          <h3 className="heading3">Product Details</h3>
       </div>
                <div className="order-detail-box border-bottom p-4 pb-0">
                    <div className="product-order-description d-flex">
                        <div className="product-image">
                            <img className="productdetailimg" src={`${baseUrl}${data?.product_image1}`} alt="" />
                        </div>
                        <div>
                        <h3>{data?.product_name}</h3>
                        <h3> {data?.description}</h3>
                        </div>
                    </div>
                    <div className="product-order-description d-flex mt-3 ORde">
                        <div className="d-flex">
                            <div className="product-image invisible h-25"></div>
                          
                        </div>
                        <div className="ms-2">
                            <h4>SKU Code</h4>
                            <p>{data?.sku_id}</p>
                        </div>
                        <div className="ms-5">
                            <h4>Quantity</h4>
                            <p>{data?.quantity_in_stock}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid saledetail">
                    <div className="row">
                        <div className="col-lg-6 p-4">
                            <h4>Manufacturer Name & Address: <span>{data?.supplier_name} and {data?.address}</span></h4>
                            <div className="mt-4">
                                {/* <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Manufactured On</span>
                                    <span>12/02/23</span>
                                </div> */}
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Uploaded On</span>
                                    <span>12/02/23</span>
                                </div>
                                {/* <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Received On</span>
                                    <span>28/01/23</span>
                                </div> */}
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Price</span>
                                    <span>₹{data?.price_per_product}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6 p-4">
                        <h4>Product Description</h4>

                            <div className="mt-4">
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Size</span>
                                    <span>{data?.size}</span>
                                </div>
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Color</span>
                                    <span>{data?.color}</span>
                                </div>
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Weight</span>
                                    <span>{data?.weight}</span>
                                </div>
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Materials / Ingredients</span>
                                    <span>{data?.materials_used}</span>
                                </div>
                                {/* <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Allergens</span>
                                    <span>-</span>
                                </div> */}
                                <div className="paddingline d-flex border-bottom justify-content-between">
                                    <span>Expiry Date</span>
                                    <span>{formatDate(data?.expiry_date)}</span>
                                </div>
                            </div>
                           
                        </div>
                      
                    </div>
                </div>
    </Layout>
  )
}
