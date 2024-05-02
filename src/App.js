import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Superadmin pages start
import SuperAdminLogin from "./Superadmin/Pages/SuperAdminLogin";
// Superadmin pages end

// organizaion pages start
import OrganizationLogin from "./Organization/Pages/Login";
import OrganizationSignup from "./Organization/Pages/Signup";
import { OrgDashboard } from "./Organization/Pages/OrgDashboard";
import OrganizationUpdateProfile from "./Organization/Pages/UpdateProfile";
import { OrgProfile } from "./Organization/Pages/OrgProfile";
import { BothAgent } from "./Organization/Pages/BothAgent";
import { AgentlistField } from "./Organization/Pages/AgentlistField";
import { AddAgent } from "./Organization/Pages/AddAgent";
import { AgentlistWarehouse } from "./Organization/Pages/AgentlistWarehouse";
import { Agentviewprofile } from "./Organization/Pages/Agentviewprofile";
import { Orgsupplierlist } from "./Organization/Pages/Orgsupplierlist";
import WerehouseAgentProduct from "./Organization/Pages/WerehouseAgentProduct";
import { OrgAddSupplier } from "./Organization/Pages/Addsupplier";
import { ProductDetail } from "./Organization/Pages/ProductDetail";
import OrgProductList from "./Organization/Pages/ProductList";
import OrgAddProduct from "./Organization/Pages/ProductAdd";
import { OrgOrderList } from "./Organization/Pages/OrderList";
import OrgOrderDetails from "./Organization/Pages/OrderDetails";
// organization pages end

// Agent pages start
import AgentDashboard from "./Agent/FieldAgent/AgentDashboard";
import AgentLogin from "./Agent/Login";
import { AgentProfile } from "./Agent/FieldAgent/AgentProfile";
import AgentUpdateProfile from "./Agent/FieldAgent/AgentUpdateProfile";
import ProductList from "./Agent/FieldAgent/ProductList";
import OrderList from "./Agent/FieldAgent/OrderList";
import PaymentTransactions from "./Agent/FieldAgent/PaymentTransactions";
import PaymentOnboarding from "./Agent/FieldAgent/PaymentOnboarding";
import PaymentProductSold from "./Agent/FieldAgent/PaymentProductSold";
import { PaymentOrderProduct } from "./Agent/FieldAgent/PaymentOrderProduct";
import Return from "./Agent/FieldAgent/Return";
import OrderDetails from "./Agent/FieldAgent/OrderDetails";
import AddProduct from "./Agent/FieldAgent/ProductAdd";
import { SupplierUpdateProfile } from "./Agent/FieldAgent/SupplierUpdateProfile";
import { AddSupplier } from "./Agent/FieldAgent/AddSupplier";
import EditProduct from "./Agent/FieldAgent/EditProduct";

  // supplier Dashboard in agent
  import { HomeSupplieraAg } from "./Agent/FieldAgent/SupplierDashboard/Dashboard";
  import { ProductsSupplieraAg } from "./Agent/FieldAgent/SupplierDashboard/Products";
  import { FiledAgentProductDetail } from "./Agent/FieldAgent/SupplierDashboard/ProductDetail";
  import { OrderSupplieraAg } from "./Agent/FieldAgent/SupplierDashboard/Orders";
  import { OrderDetailsipplerDb } from "./Agent/FieldAgent/SupplierDashboard/OrderDetailsipplerDb";
  import { Supplierviewprofile } from "./Organization/Pages/Supplierviewprofile";
  import { ProductOnTheWay } from "./Agent/WarehouseAgent/ProductOnTheWay";
  import { Inventory } from "./Agent/WarehouseAgent/Inventory";
  import { WarehouseProductDetail } from "./Agent/WarehouseAgent/ProductDetail";

// Agent pages end

// Supplier pages start
import SupplierLogin from "./Supplier/Pages/Login";
// import SupplierSignup from './Supplier/Pages/Signup';
import { Dashboard } from "./Supplier/Pages/Dashboard";
import { ViewProfileSupplier } from "./Supplier/Pages/ViewProfileSupplier";
import SupplierAddProduct from "./Supplier/Pages/SupplierAddProduct";
import SupplierEditProduct from "./Supplier/Pages/SupplierEditProduct";
import SupplierProfile from "./Supplier/Pages/UpdateSupplierProfile";
import { SupplierProductDetail } from "./Supplier/Pages/ProductDetail";
import SupplierProduct from "./Supplier/Pages/SupplierProductList";
import ProductOrderList from "./Supplier/Pages/Orderlist";
import OrderDetail from "./Supplier/Pages/OrderDetail";
import CustomerList from "./Supplier/Pages/CustomerList";
import CustomerOrderList from "./Supplier/Pages/CustmerOrderDetails";
import { CustomerReview } from "./Supplier/Pages/CustomerReview";
import PaymentUser from "./Supplier/Pages/Payment";
import PaymentToDate from "./Supplier/Pages/PaymentToDate";
import PaymentToDateDetails from "./Supplier/Pages/PaymentToDateDeatail";
import OutstandingPayments from "./Supplier/Pages/OutstandingPayments";
import OutPymentSpecific from "./Supplier/Pages/OutPymentSpecific";
import ReturnProduct from "./Supplier/Pages/return";
import SupplierDashboard from "./Supplier/Pages/SupplierDashboard";
import Table from "./component/Table";
// Supplier pages end

import ErrorPage from "./component/Errorpage";
import { useDispatch } from "react-redux";
import { setUser } from "./store/loginSlice";
import Warehouse from "./Organization/Pages/Warehouse";
import AddWarehouse from "./Organization/Pages/AddWarehouse";
import SupplierView from "./Organization/Pages/SupplierView";
import { SupplierListOrg } from "./Organization/Pages/SupplierList";
import SupplierList from "./Agent/FieldAgent/SupplierList";
import { SupplierViewProfile } from "./Agent/FieldAgent/SupplierDashboard/SupplerViewProfile";

// created a hoc function for authentication
function PrivateRoute({ element: Element, ...rest }) {
  const userType = localStorage.getItem("User_Type");
  const userId = localStorage.getItem("User_Id");

  // Redirect to login if user is not authenticated
  if (!userType || !userId) {
    return <Navigate to="/agent/login" />;
  }

  // Otherwise, render the protected component
  return Element;
}

function App() {
  const userType = localStorage.getItem("User_Type");
  const getRedirectPath = () => {
    switch (userType) {
      case "Org":
        return "/organization/dashboard";
      case "Supplier":
        return "/supplier/dashboard";
      case "Wharehouse":
        return "/agent/dashboard"; // Adjust this path according to your app's logic
      case "Field":
        return "/agent/dashboard";
      default:
        return "/OrganizationLogin"; // Redirect to default path if user type is not recognized
    }
  };

  return (
    <>
      <Router>
        <ToastContainer theme="colored" />
        <Routes>
          {/* organization routes starrt */}
          <Route
            exact
            path="/"
            element={<Navigate to={getRedirectPath()} replace />}
          />
          <Route
            exact
            path="/OrganizationLogin"
            element={<OrganizationLogin />}
          />
          <Route
            exact
            path="/organization/Signup"
            element={<OrganizationSignup />}
          />
          <Route
            exact
            path="/organization/dashboard"
            element={<PrivateRoute element={<OrgDashboard />} />}
          />
          <Route
            exact
            path="/organization/warehouse"
            element={<PrivateRoute element={<Warehouse />} />}
          />
           <Route
            exact
            path="/organization/supplierList"
            element={<PrivateRoute element={<SupplierListOrg />} />}
          />
          <Route
            exact
            path="/organization/profile"
            element={<PrivateRoute element={<OrgProfile />} />}
          />
          <Route
            exact
            path="/organization/warehouse/new"
            element={<PrivateRoute element={<AddWarehouse />} />}
          />
          <Route
            exact
            path="/organization/update-profile"
            element={<PrivateRoute element={<OrganizationUpdateProfile />} />}
          />
          <Route
            exact
            path="/organization/both-agent"
            element={<PrivateRoute element={<BothAgent />} />}
          />
          <Route
            exact
            path="/organization/field-agent"
            element={<PrivateRoute element={<AgentlistField />} />}
          />
          <Route
            exact
            path="/organization/add-agent"
            element={<PrivateRoute element={<AddAgent />} />}
          />
          <Route
            exact
            path="/organization/agent-profile-view/:id"
            element={<PrivateRoute element={<Agentviewprofile />} />}
          />
          <Route
            exact
            path="/organization/warehouse-agent"
            element={<PrivateRoute element={<AgentlistWarehouse />} />}
          />
          <Route
            exact
            path="/organization/supplier-profile-view"
            element={<PrivateRoute element={<Supplierviewprofile />} />}
          />
          <Route
            exact
            path="/organization/inventory/:id"
            element={<PrivateRoute element={<WerehouseAgentProduct />} />}
          />
          <Route
            exact
            path="/organization/supplier-list/:id"
            element={<PrivateRoute element={<Orgsupplierlist />} />}
          />
          <Route
            exact
            path="/organization/add-supplier"
            element={<PrivateRoute element={<OrgAddSupplier />} />}
          />
          <Route
            exact
            path="/organization/product-detail/:id"
            element={<PrivateRoute element={<ProductDetail />} />}
          />
          <Route
            exact
            path="/organization/product-list"
            element={<PrivateRoute element={<OrgProductList />} />}
          />
          <Route
            exact
            path="/organization/product-add"
            element={<PrivateRoute element={<OrgAddProduct />} />}
          />
          <Route
            exact
            path="/organization/order-list"
            element={<PrivateRoute element={<OrgOrderList />} />}
          />
          <Route
            exact
            path="/organization/order-detail"
            element={<PrivateRoute element={<OrgOrderDetails />} />}
          />
          <Route
            exact
            path="/organization/supplierView/:id"
            element={<PrivateRoute element={<SupplierView />} />}
          />
          <Route
            exact
            path="/table"
            element={<PrivateRoute element={<Table />} />}
          />
          {/* organization routes end */}

          {/* Super admin routes start */}
          <Route 
            exact
            path="/super-admin/login"
            element={<SuperAdminLogin />}
          />
          {/* Super admin routes end */}

          {/* Agent routes start */}

          {/* field agent */}
          <Route exact path="/agent/login" element={<AgentLogin />} />
          <Route
            exact
            path="/agent/dashboard"
            element={<PrivateRoute element={<AgentDashboard />} />}
          />
          <Route
            exact
            path="/agent/profile"
            element={<PrivateRoute element={<AgentProfile />} />}
          />
          <Route
            exact
            path="/agent/update-profile"
            element={<PrivateRoute element={<AgentUpdateProfile />} />}
          />
          <Route
            exact
            path="/agent/supplier-list"
            element={<PrivateRoute element={<SupplierList />} />}
          />

          <Route
            exact
            path="/agent/add-supplier"
            element={<PrivateRoute element={<AddSupplier />} />}
          />
          <Route
            exact
            path="/agent/supplier/update-profile/:id"
            element={<PrivateRoute element={<SupplierUpdateProfile />} />}
          />
          <Route
            exact
            path="/agent/product-list"
            element={<PrivateRoute element={<ProductList />} />}
          />
          <Route
            exact
            path="/agent/order-list"
            element={<PrivateRoute element={<OrderList />} />}
          />
          <Route
            exact
            path="/agent/payment-onboarding"
            element={<PrivateRoute element={<PaymentOnboarding />} />}
          />
          <Route
            exact
            path="/agent/payment-product-sold"
            element={<PrivateRoute element={<PaymentProductSold />} />}
          />
          <Route
            exact
            path="/agent/payment-order-product/:id"
            element={<PrivateRoute element={<PaymentOrderProduct />} />}
          />
          <Route
            exact
            path="/agent/payment-transaction"
            element={<PrivateRoute element={<PaymentTransactions />} />}
          />
          <Route
            exact
            path="/agent/payment/return"
            element={<PrivateRoute element={<Return />} />}
          />
          <Route
            exact
            path="/agent/order-details/:id"
            element={<PrivateRoute element={<OrderDetails />} />}
          />
          <Route
            exact
            path="/agent/add-product/:id"
            element={<PrivateRoute element={<AddProduct />} />}
          />

          {/* Supplier Dashboard in agent */}
          <Route
            exact
            path="/agent/supplier/profile/:id"
            element={<PrivateRoute element={<SupplierViewProfile />} />}
          />

          <Route
       
            exact
            path="/agent/supplier/home"
            element={<PrivateRoute element={<HomeSupplieraAg />} />}
          />
          <Route
            exact
            path="/agent/supplier/product/:id"
            element={<PrivateRoute element={<ProductsSupplieraAg />} />}
          />
          <Route
            exact
            path="/agent/supplier/product-detail/:id"
            element={<PrivateRoute element={<FiledAgentProductDetail />} />}
          />
          <Route
            exact
            path="/agent/supplier/order"
            element={<PrivateRoute element={<OrderSupplieraAg />} />}
          />
          <Route
            exact
            path="/agent/supplier/order-details/"
            element={<PrivateRoute element={<OrderDetailsipplerDb />} />}
          />

          {/* warehouse  */}
          <Route
            exact
            path="/agent/product-on-the-way"
            element={<PrivateRoute element={<ProductOnTheWay />} />}
          />
          <Route
            exact
            path="/agent/Inventory"
            element={<PrivateRoute element={<Inventory />} />}
          />
          <Route
            exact
            path="/agent/product-detail"
            element={<PrivateRoute element={<WarehouseProductDetail />} />}
          />
          <Route
            exact
            path="/agent/edit-product/:id"
            element={<PrivateRoute element={<EditProduct />} />}
          />

          {/* Agent routes end */}

          {/* Supplier routes start */}
          <Route exact path="/supplier/login" element={<SupplierLogin />} />
          {/* <Route exact path="/supplier/signup" element={<SupplierSignup />} /> */}
          <Route exact path="/supplier/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route
            exact
            path="/supplier/view-profile"
            element={<PrivateRoute element={<ViewProfileSupplier />} />}
          />
          <Route exact path="/supplier/profile" element={<PrivateRoute element={<SupplierProfile />}  />}/>
          <Route
            exact
            path="/supplier/product-list"
            element={<PrivateRoute element={<SupplierProduct />} />}
          />
          <Route
            exact
            path="/supplier/product-detail/:id"
            element={<PrivateRoute element={<SupplierProductDetail />} />}
          />
          <Route
            exact
            path="/supplier/add-product"
            element={<PrivateRoute element={<SupplierAddProduct />} />}
          />
          <Route
            exact
            path="/supplier/edit-product/:id"
            element={<SupplierEditProduct />}
          />
          {/* <Route
            exact
            path="/supplier/edit-product/:id"
            element={<SupplierEditProduct />}
          /> */}
          <Route
            exact
            path="/supplier/product-order-list"
            element={<PrivateRoute element={<ProductOrderList />} />}
          />
          <Route
            exact
            path="/supplier/order-detail"
            element={<PrivateRoute element={<OrderDetail />} />}
          />
          <Route
            exact
            path="/supplier/customer-list"
            element={<PrivateRoute element={<CustomerList />} />}
          />
          <Route
            exact
            path="/supplier/customer-review"
            element={<PrivateRoute element={<CustomerReview />} />}
          />
          <Route
            exact
            path="/supplier/customer-order-detail"
            element={<PrivateRoute element={<CustomerOrderList />} />}
          />
          <Route exact path="/supplier/payment" element={<PrivateRoute element={<PaymentUser />}  />}/>
          <Route
            exact
            path="/supplier/payment-to-date"
            element={<PrivateRoute element={<PaymentToDate />} />}
          />
          <Route
            exact
            path="/supplier/payment-to-date-details"
            element={<PrivateRoute element={<PaymentToDateDetails />} />}
          />
          <Route
            exact
            path="/supplier/outstanding-payments"
            element={<PrivateRoute element={<OutstandingPayments />} />}
          />
          <Route
            exact
            path="/supplier/outpyment-specific"
            element={<PrivateRoute element={<OutPymentSpecific />} />}
          />
          <Route
            exact
            path="/supplier/return-product"
            element={<PrivateRoute element={<ReturnProduct />} />}
          />
          <Route
            exact
            path="/supplier/supplier-dashboard"
            element={<PrivateRoute element={<SupplierDashboard />} />}
          />

          {/* Supplier routes end */}
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
