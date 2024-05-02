import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function EditProduct(props) {
  const { id } = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [category, setCategory] = useState([]);
  const [sabCategory, setSabCategory] = useState(null);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [org, setOrg] = useState(null)
  const [loading, setLoading] = useState(null);
 
//   const [status, setStatus] = useState(null);
  const [showBulkInputs, setShowBulkInputs] = useState(false);
  const userId = localStorage.getItem('User_Id');
  const handleBulkCheckboxChange = (e) => {
    setShowBulkInputs(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();
  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
    "Cyan",
    "Magenta",
    "Pink",
    "Black",
    "White",
    "Brown",
    "Gray",
    "Maroon",
    "Olive",
    "Navy",
    "Purple",
    "Teal",
    "Silver",
    "Gold",
    "Beige",
    "Turquoise",
    "Khaki",
    "Coral",
    "Salmon",
    "Lavender",
    "Peach",
    "Sky blue",
    "Lime",
    "Cream",
    "Tan",
    "Orchid",
    "Rust",
    "Sea green",
    "Slate gray",
    "Ivory",
    "Mint green",
    "Dark red",
    "Dark orange",
    "Dark yellow",
    "Dark green",
    "Dark blue",
    "Dark purple",
    "Dark cyan",
    "Dark magenta",
    "Dark pink",
    "Dark brown",
    "Dark gray",
    "Light red",
    "Light orange",
    "Light yellow",
    "Light green",
    "Light blue",
    "Light purple",
    "Light cyan",
    "Light magenta",
    "Light pink",
    "Light brown",
    "Light gray",
    "Deep red",
    "Deep orange",
    "Deep yellow",
    "Deep green",
    "Deep blue",
    "Deep purple",
    "Deep cyan",
    "Deep magenta",
    "Deep pink",
    "Deep brown",
    "Deep gray",
    "Pale red",
    "Pale orange",
    "Pale yellow",
    "Pale green",
    "Pale blue",
    "Pale purple",
    "Pale cyan",
    "Pale magenta",
    "Pale pink",
    "Pale brown",
    "Pale gray",
    "Bright red",
    "Bright orange",
    "Bright yellow",
    "Bright green",
    "Bright blue",
    "Bright purple",
    "Bright cyan",
    "Bright magenta",
    "Bright pink",
    "Bright brown",
    "Bright gray",
    "Neon red",
    "Neon orange",
    "Neon yellow",
    "Neon green",
    "Neon blue",
    "Neon purple",
    "Neon cyan",
    "Neon magenta",
    "Neon pink",
    "Neon brown",
    "Neon gray",
    "Baby blue",
    "Apricot",
    "Azure",
    "Burgundy",
    "Chartreuse",
    "Crimson",
    "Fuchsia",
    "Lilac",
    "Mauve",
    "Periwinkle",
    "Rose",
    "Saffron",
    "Tangerine",
    "Vermilion",
    "Wisteria",
  ];

  const categoryid = watch("category");
  useEffect(() => {
    axios
      .post(`${baseUrl}/Agent/Get_Product_category_list`,{
        id:userId
      })
      .then((res) => {
        setOrg(res.data.organization_id)
        setCategory(res.data.data);
        
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (categoryid) {
      axios
        .post(`${baseUrl}/Agent/Get_Sub_category_list`, {
          fk_category_id: categoryid,
        })
        .then((res) => {
          if (categoryid) {
            setSabCategory(res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [baseUrl, categoryid]);

  const onSubmit = async (data) => {
     console.log(data);
    try {
      const formData = new FormData();
      formData.append("product_id ",id)
      formData.append("fk_product_category_id",Number(data.category));
      formData.append("fk_sub_product_id", data.SubCategory);
      formData.append("fk_supplier_id", id);
      formData.append("fk_organization_id", org);
      formData.append("fk_agent_id", userId);
      formData.append("price_per_product", data.Priceperproduct);
      formData.append("product_name", data.productname);
      formData.append("quantity_in_stock", Number(data.Quantity));
      formData.append("weight", data.Weight);
      formData.append("description", data.description);
      formData.append("color_pattern", data.Color);
      formData.append("expiry_date", data.ExpiryDate);
      formData.append("materials_used", data.Material);
      formData.append("size", data.size);
      formData.append("nutritional_information", data.Nutritional);
      formData.append("is_sell_bulk", data.sell_bulk);
      formData.append("bulk_quantity", data.Quantitybulk);
      formData.append("bulk_quantity_price", data.Price);
      formData.append("return_policy_accepted", data.dataReturns);
    //   formData.append("status", status);

      images.forEach((image, index) => {
        formData.append(`product_image${index + 1}`, image);
      });

      const res = await axios.post(
        `${baseUrl}/Agent/Update_Product_BY_Agent`,
        formData
      );

      if (res.data.status === 1) {
        console.log(data);
        toast("Update Product Successful");
        navigate(-1);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    setValue("category", data?.fk_category_id);
    setValue("SubCategory", data?.fk_sub_category_id);
    setValue("productname", data?.product_name);
    setValue("Priceperproduct", data?.price_per_product);
    setValue("Quantity", data?.quantity_in_stock);
    setValue("description", data?.description);
    setValue("size", data?.size);
    setValue("Material", data?.materials_used);
    setValue("Color", data?.color);
    setValue("ExpiryDate", data?.expiry_date);
    setValue("Weight", data?.weight);
    setValue("Nutritional", data?.nutritional_information);
    setValue("sell_bulk", data?.is_sell_bulk);
    setValue("Quantitybulk", data?.bulk_quantity);
    setValue("Price", data?.bulk_quantity_price);
    setValue("dataReturns", data?.return_policy_accepted);
    setShowBulkInputs(data?.is_sell_bulk);
   

  }, [data]);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${baseUrl}/Agent/Get_Product_Detail_By_Agent`, {
        product_id: id,
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate({});
  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedImages = [];

    for (let i = 0; i < Math.min(files.length, 6); i++) {
      selectedImages.push(files[i]);
    }
    setImages(selectedImages);
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
            <NavLink
              onClick={() => {
                navigate(-1);
              }}
              className="text-dark"
            >
              <h5 className="mb-0">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z"
                    fill="black"
                  />
                </svg>
                Edit Product
              </h5>
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
          <form onSubmit={handleSubmit(onSubmit)} className="tabledataP mb-5">
            <div className="bg-white-ctm">
              <div className="row mb-5">
                <div className="col-lg-8">
                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <label htmlFor="" className="formlb1">
                        Category
                      </label>
                      <select
                        className="form-select"
                        name=""
                        id=""
                        {...register("category", {
                          required: true,
                        })}
                      >
                        <option value="">Select</option>
                        {category?.map((item) => {
                          return (
                            <option
                              selected={
                                data?.fk_category_id === item.id ? true : false
                              }
                              value={item.id}
                            >
                              {item.category}
                            </option>
                          );
                        })}
                      </select>
                      {errors.category && (
                        <p className="error-message">Category is required</p>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="formlb1">
                        Sub-Category
                      </label>
                      <select
                        className="form-select"
                        name=""
                        id=""
                        {...register("SubCategory", {
                          required: true,
                        })}
                      >
                        <option value="">Select</option>
                        {sabCategory?.map((item) => {
                          return (
                            <option
                              selected={
                                data?.fk_sub_category_id === item.id ? true : false
                              }
                              value={item.id}
                            >
                              {item.sub_category}
                            </option>
                          );
                        })}
                      </select>
                      {errors.SubCategory && (
                        <p className="error-message">
                          Sub Category is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Product Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          {...register("productname", {
                            required: true,
                          })}
                        />
                        {errors.productname && (
                          <p className="error-message">
                            Product Name is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Quantity Available
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"

                          {...register("Quantity", {
                            required: true,
                          })}
                          onKeyDown={(e) => {
                            const isNumeric = /^[0-9]$/.test(e.key);
                            const isBackspaceOrDelete =
                              e.key === "Backspace" || e.key === "Delete";
                            if (!isNumeric && !isBackspaceOrDelete) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.Quantity && (
                          <p className="error-message">
                            Quantity Available is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Price per product
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"

                          {...register("Priceperproduct", {
                            required: true,
                          })}
                          onKeyDown={(e) => {
                            const isNumeric = /^[0-9]$/.test(e.key);
                            const isBackspaceOrDelete =
                              e.key === "Backspace" || e.key === "Delete";
                            if (!isNumeric && !isBackspaceOrDelete) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.Price && (
                          <p className="error-message">
                            Price per product is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label formlb1"
                  >
                    Product description*
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"

                    style={{ minHeight: "238px", resize: "none" }}
                    {...register("description", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.description && (
                    <p className="error-message">description is required</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Size
                        </label>
                        <input
                          type="text"
                          className="form-control"

                          {...register("size", {})}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Color
                        </label>
                        <select
                          className="form-select"
                          name=""
                          id=""
                          {...register("Color", {})}
                        >
                          <option value="">Selcet</option>
                          {colors.map((color, index) => (
                            <option key={index}  selected={
                              data?.color === color ? true : false
                            } value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Weight
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          
                          {...register("Weight", {})}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Material/Ingredients Used
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"

                          {...register("Material", {})}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Expiry Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1"

                          {...register("ExpiryDate", {})}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label formlb1"
                        >
                          Nutritional Info
                        </label>
                        <input
                          type="text"
                          className="form-control"

                          id="exampleFormControlInput1"
                          {...register("Nutritional", {})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="fileInput" className="form-label formlb1">
                    Photo Upload
                  </label>
                  <div style={{ background: "#FFFFFF" }}>
                    <label
                      className="photo-uploader d-block p-4 pb-0"
                      htmlFor="fileInput"
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        id="fileInput"
                      />
                      <div className="text-center draguplaodphoto">
                        <img
                          style={{ width: "28px" }}
                          src="../images/file_upload.svg"
                          alt=""
                        />
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
                      <div
                        key={index}
                        style={{
                          background: "#FFFFFF",
                          position: "relative",
                          width: "19%",
                          borderRadius: "4px",
                          marginBottom: "2px",
                        }}
                      >
                        <img
                          src={
                            typeof image === "string"
                              ? image
                              : URL.createObjectURL(image)
                          }
                          className="showuploadimage"
                          alt="Uploaded"
                        />
                        <button
                          type="button"
                          className="deleteiconbtn"
                          onClick={() => handleDeleteImage(index)}
                        >
                          <img
                            style={{ width: "14px" }}
                            src="/images/deleticon.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white-ctm mb-2 px-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                            {...register("sell_bulk", {})}
                            onChange={handleBulkCheckboxChange}

                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault5">
                            Would you also like to sell it in Bulk?
                        </label>
                        </div>
                    </div>
                    {showBulkInputs && (
                        <>
                        <div className="col-lg-4">
                            <div className="">
                            <label htmlFor="exampleFormControlInput1" className="form-label formlb1">
                                Quantity
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                

                                {...register("Quantitybulk", {})}
                            />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="">
                            <label htmlFor="exampleFormControlInput1" className="form-label formlb1">
                                Price
                            </label>
                            <input
                                type="text"
                                className="form-control"

                                id="exampleFormControlInput1"
                                {...register("Price", {})}
                            />
                            </div>
                        </div>
                        </>
                    )}
                  <div className="col-lg-4">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label formlb1 pb-5 border-bottomnew mb-3"
                    >
                      What you will receive
                    </label>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>
                        <p className="mb-0 pretext">Platform Fee: 2% </p>
                        <p className="pretext">Organization Cut: 5% </p>
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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                      {...register("dataReturns", {})}
                    />
                    <label className="form-check-label" for="flexCheckDefault1">
                      Returns accepted
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white-ctm py-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="btn-grp">
                    <NavLink
                      to={"#"}
                      className="formbtnnew3"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Discard
                    </NavLink>
                    {/* <NavLink
                      to={"#"}
                      className="formbtnnew3"
                      onClick={handleSubmit((data) => onSubmit(data, "Draft"))}
                    >
                      Save draft
                    </NavLink>
                    <button
                      type="submit"
                      onClick={handleSubmit((data) =>
                        onSubmit(data, "Publish")
                      )}
                      className="formbtnnew4 ms-2"
                    >
                      Publish
                    </button> */}

                    <button
                      type="submit"
                      className="formbtnnew4 ms-2"
                    >
                      Update
                    </button>
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

export default EditProduct;
