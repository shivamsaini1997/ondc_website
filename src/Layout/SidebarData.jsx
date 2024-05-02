const SidebarData = () => {
       
 
//    //  const homeimage = <img className='userform-icon' src={'/images/house.svg'} />
//    //  const backtohome = <span className="border-bottom-after">Back to Home</span>
    const Org = [
      {name: 'Home', imgsize: "",   srcs : "/images/home.svg", url: "/organization/dashboard"},
      {name: 'Warehouse', imgsize: "",   srcs : "/images/warehouse.svg", url: "/organization/warehouse"},
      {name: 'Agent', imgsize: "",   srcs : "/images/Suppliers.svg", url: "/organization/both-agent"},
      {name: 'Individual Supplier', imgsize: "",   srcs : "/images/people.svg", url: "/organization/supplierList"},
      {name: 'Products', imgsize: "",   srcs : "/images/Products.svg", url: "/organization/product-list"},
      {name: 'Orders', imgsize: "",   srcs : "/images/check-out.svg", url: "/organization/order-list"},
      {name: 'Payments', imgsize: "",   srcs : "/images/credit-card 2.svg", url: "/organization/f"},
      {name: 'Customers', imgsize: "",   srcs : "/images/people.svg", url: "/supplier/customer-list"},
      {name: 'Return', imgsize: "",   srcs : "/images/return-box 2.svg", url: "s"},
    ];
    const Field = [
      {name: 'Home', imgsize: "",   srcs : "/images/home.svg", url: "/agent/dashboard"},
      {name: 'Suppliers', imgsize: "",   srcs : "/images/Suppliers.svg", url: "/agent/supplier-list"},
      {name: 'Products', imgsize: "",   srcs : "/images/Products.svg", url: "/agent/product-list"},
      {name: 'Orders', imgsize: "",   srcs : "/images/check-out.svg", url: "/agent/order-list"},
      {name: 'Payments', imgsize: "",   srcs : "/images/credit-card 2.svg", url: "/agent/payment-onboarding"},
      {name: 'Customers', imgsize: "",   srcs : "/images/people.svg", url: "/agent/payment"},
      {name: 'Return', imgsize: "",   srcs : "/images/return-box 2.svg", url: "s"},
    ];
    const Wharehouse = [
      {name: 'Home', imgsize: "",   srcs : "/images/home.svg", url: "/agent/dashboard"},
      {name: 'On the way', imgsize: "",   srcs : "/images/ontheway.svg", url: "/agent/product-on-the-way"},
      {name: 'Inventory', imgsize: "",   srcs : "/images/Products.svg", url: "/agent/Inventory"},
      {name: 'Orders', imgsize: "",   srcs : "/images/check-out.svg", url: "/agent/order-list"},
      {name: 'Payments', imgsize: "",   srcs : "/images/credit-card 2.svg", url: "/agent/payment"},
      {name: 'Return', imgsize: "",   srcs : "/images/return-box 2.svg", url: "s"},
    ];

    const Suppliers = [
      {name: 'Home', imgsize: "",   srcs : "/images/home.svg", url: "/supplier/dashboard"},
      {name: 'Products', imgsize: "",   srcs : "/images/Products.svg", url: "/supplier/product-list"},
      {name: 'Orders', imgsize: "",   srcs : "/images/check-out.svg", url: "/supplier/product-order-list"},
      {name: 'Payments', imgsize: "",   srcs : "/images/credit-card 2.svg", url: "/supplier/payment"},
      {name: 'Customers', imgsize: "",   srcs : "/images/people.svg", url: "/supplier/customer-list"},
      {name: 'Return', imgsize: "",   srcs : "/images/return-box 2.svg", url: "s"},
    ];
    
    return {  Field, Wharehouse, Suppliers, Org};
}
export default SidebarData;