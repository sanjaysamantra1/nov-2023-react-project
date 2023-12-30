import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Aboutus from "../aboutus/Aboutus";
import Careers from "../careers/Careers";
import NotFound from "../notFound/NotFound";
import ProductDetails from "../products/ProductDetails";
import ProductDetail from "../products/ProductDetail";
import PermanentJobs from "../careers/PermanentJobs";
import ContractJobs from "../careers/ContractJobs";
import ProtectedRoute from "../route/ProtectedRoute";
import { Suspense } from "react";
const Products = React.lazy(() => import("../products/Products"));

export default function RouteContainer() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route exact path="/careers" element={<Careers />}>
        <Route index element={<PermanentJobs />}></Route>
        <Route path="permanentjobs" element={<PermanentJobs />}></Route>
        <Route path="contractjobs" element={<ContractJobs />}></Route>
      </Route>
      <Route
        exact
        path="/products"
        element={
          <ProtectedRoute>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Products />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route exact path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/productdetail" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
