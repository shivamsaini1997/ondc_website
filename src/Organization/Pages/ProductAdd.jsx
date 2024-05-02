import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";


function OrgAddProduct(props) {

    const [images, setImages] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();

        const files = e.dataTransfer.files;
        const newImages = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                newImages.push(reader.result);
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        const newImages = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                newImages.push(reader.result);
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    return (
        <>
            <Layout>
                <div className="SupplierProductAdd mx-4 py-2">
                    <div className="headprof{ile border-0 ps-0 mb-4">
                        <NavLink to={"/organization/product-list"} className="text-dark">
                            <h5 className="mb-0"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black" />
                            </svg>
                                Add a new Product</h5>
                        </NavLink>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <span className="formlb1">Basic Information</span>
                                <p className="formlb2 mb-0">Fill all the information below</p>
                            </div>
                        </div>
                    </div>
                    <form className="tabledataP mb-5">
                        <div className="bg-white-ctm">


                            <div className="row mb-5">
                                <div className="col-lg-8">
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <label htmlFor="" className="formlb1">Category*</label>
                                            <select className="form-select" name="" id="">
                                                <option value="">1</option>
                                                <option value="">1</option>
                                                <option value="">1</option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Product Name*</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Manufacturer Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Quantity</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Price*</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlInput1" className="form-label formlb1">Product description*</label>
                                    <textarea name="" id="" className="form-control" style={{ minHeight: '238px', resize: 'none' }} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Size</label>
                                                <select className="form-select" name="" id="">
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Color</label>
                                                <select className="form-select" name="" id="">
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Weight</label>
                                                <select className="form-select" name="" id="">
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Material/Ingredients Used</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Expiry Date</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label formlb1">Nutritional Info</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlInput1" className="form-label formlb1">Product description*</label>
                                    <div style={{ background: '#FFFFFF' }}>
                                    <label
                                        className="photo-uploader d-block p-4 pb-0"
                                        htmlFor="fileInput"
                                        onDrop={handleDrop}
                                        onDragOver={(e) => e.preventDefault()}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileInputChange}
                                            style={{ display: 'none' }}
                                            id="fileInput"
                                        />
                                        {/* <p>Photo Upload</p> */}
                                        <div className="text-center draguplaodphoto">
                                            <img style={{ width: '28px' }} src="../images/file_upload.svg" alt="" />
                                            <label className="d-block" htmlFor="fileInput">
                                                Drop files here or drag to upload
                                            </label>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 pe-0">
                                    <div className="d-flex w-100 uploadimg-box">
                                        {images.map((image, index) => (
                                            <div key={index} style={{ background: '#FFFFFF', position: 'relative', width: '19%', borderRadius: '4px', marginBottom: '2px' }}>
                                                <img src={image} className="showuploadimage" alt="Uploaded" />
                                                <a href="#" className="deleteiconbtn" onClick={() => handleDeleteImage(index)}>
                                                    <img style={{ width: '14px' }} src="../images/deleticon.svg" alt="" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            


                            </div>
                            <div className="bg-white-ctm mb-2 px-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                            <label className="form-check-label" for="flexCheckDefault5">
                                                Would you also like to sell it in Bulk?
                                            </label>
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="">
                                            <label for="exampleFormControlInput1" className="form-label formlb1">Quantity</label>
                                            <select className="form-select" name="" id="">
                                                <option value=""></option>
                                                <option value="">1</option>
                                                <option value="">1</option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="    ">
                                            <label for="exampleFormControlInput1" className="form-label formlb1">Price</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <label for="exampleFormControlInput1" className="form-label formlb1 pb-5 border-bottomnew mb-3">What you will receive</label>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div>
                                                <p className="mb-0 pretext">Platform Fee: 2% </p>
                                                <p className="pretext">Organization Cut: 5%  </p>
                                            </div>
                                            <div>
                                                <p className="mb-0 pretext">Field Agent: 1%</p>
                                                <p className="pretext">Warehouse Agent: 1%</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label className="form-check-label" for="flexCheckDefault1">
                                            Returns accepted
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                        <label className="form-check-label" for="flexCheckChecked2">
                                            No returns accepted
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* <div className="bg-white-ctm mb-2">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <div className="">
                                        <span className="formlb1">Where would you like to store it?</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Returns accepted
                                        </label>
                                    </div>
                                    <div className="ms-4">
                                        <label for="exampleFormControlInput1" className="form-label formlb1">How many are you storing at CFC?</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                                <div className="col-lg-8 text-center">
                                    <div className="form-check mb-3">
                                        <input className="form-check-input float-none" type="checkbox" value="" id="flexCheckDefault4" />
                                        <label className="form-check-label ms-2" for="flexCheckDefault4">
                                            With Supplier itself
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                     
                        <div className="bg-white-ctm py-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="btn-grp">
                                        <NavLink to={"#"} className="formbtnnew3">Discard</NavLink>
                                        <NavLink to={"#"} className="formbtnnew3">Save draft</NavLink>
                                        <NavLink to={"#"} className="formbtnnew4 ms-2">Publish</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
}

export default OrgAddProduct    ;