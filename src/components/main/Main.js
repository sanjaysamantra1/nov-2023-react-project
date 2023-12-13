import React, { useState } from "react";
import Demo1 from "../demo/Demo1";
import CssModule from "../cssModule/CssModule";
import ConditionalCSS from "../conditionalCSS/ConditionalCSS";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ListDemo1 from "../List/ListDemo1";
import ListDemo2 from "../List/ListDemo2";
import ListDemo3 from "../List/ListDemo3";
import ListDemo4 from "../List/ListDemo4";
import UserList from "../List/UserList";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ForceUpdateDemo2 from "../forceUpdate/ForceUpdateDemo2";
import ForceUpdateDemo3 from "../forceUpdate/ForceUpdateDemo3";
import GreetDemo1 from "../greet/GreetDemo1";
import GreetDemo2 from "../greet/GreetDemo2";
import MyModal from "../props/MyModal";
import StateDemo0 from "../state/StateDemo0";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import ToggleDemo from "../state/ToggleDemo";
import CounterDemo1 from "../state/CounterDemo1";
import AdditionDemo from "../state/AdditionDemo";
import RemainingCharDemo from "../state/RemainingCharDemo";
import SweetAlertDemo from "../demo/SweetAlertDemo";
import ModalDemo1 from "../demo/ModalDemo1";
import ModalDemo2 from "../demo/ModalDemo2";
import Products from "../products/Products";
import ProductsSearch from "../products/ProductsSearch";
import ProductsPagination from "../products/ProductsPagination";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import AdditionDemo2 from "../events/AdditionDemo2";
import AdditionDemo3 from "../events/AdditionDemo3";
import AdditionDemo4 from "../events/AdditionDemo4";
import EventDemo4 from "../events/EventDemo4";
import Parent from "../comp-communication/Parent";
import PureDemo1 from "../demo/PureDemo1";
import PureDemo2 from "../demo/PureDemo2";
import LifecycleDemo1 from "../lifeCycle/LifecycleDemo1";
import ComponentDidMountDemo from "../lifeCycle/ComponentDidMountDemo";
import LifecycleDemo2 from "../lifeCycle/LifecycleDemo2";
import LifecycleDemo3 from "../lifeCycle/LifecycleDemo3";
import LifecycleDemo4 from "../lifeCycle/LifecycleDemo4";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import UseEffectDemo2 from "../hooks/UseEffectDemo2";
import UseEffectDemo3 from "../hooks/UseEffectDemo3";

export default function Main() {
  const [flag,setFlag] = useState(true);

  return (
    <div style={{ minHeight: "400px" }}>
      {/* <Demo1 /> */}
      {/* <CssModule /> */}
      {/* <ConditionalCSS /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2 /> */}
      {/* <ConditionalDemo3 /> */}
      {/* <ConditionalDemo4 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <ListDemo3 /> */}
      {/* <ListDemo4 /> */}
      {/* <ForceUpdateDemo1 /> */}
      {/* <ForceUpdateDemo2 /> */}
      {/* <ForceUpdateDemo3 /> */}
      {/* <GreetDemo1 name="Bikash" msg="Good Morning" />
      <GreetDemo1 name="Sachin" msg={undefined} /> */}
      {/* <GreetDemo2>
          <div>This content Goes from parent to child</div>
      </GreetDemo2> */}
      {/* <GreetDemo1 name='Sachin' msg='Good Evening' /> */}
      {/* <UserList /> */}
      {/* <MyModal>
          <h1>This content is from Parent</h1> 
          <div>This content-2 is from Parent</div> 
      </MyModal> */}
      {/* <StateDemo0 /> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <StateDemo3 /> */}
      {/* <ToggleDemo /> */}
      {/* <CounterDemo1 /> */}
      {/* <AdditionDemo /> */}
      {/* <RemainingCharDemo /> */}
      {/* <SweetAlertDemo /> */}
      {/* <ModalDemo1 /> */}
      {/* <ModalDemo2 /> */}
      {/* <Products /> */}
      {/* <ProductsSearch /> */}
      {/* <ProductsPagination /> */}
      {/* <EventDemo2 /> */}
      {/* <EventDemo4 /> */}
      {/* <AdditionDemo4 /> */}
      {/* <Parent /> */}
      {/* <PureDemo1 /> */}
      {/* <LifecycleDemo1  color='yellow' /> */}
      {/* <ComponentDidMountDemo /> */}
      {/* <LifecycleDemo2 /> */}
      {/* <LifecycleDemo3 /> */}
      {/* <LifecycleDemo4 /> */}
      {/* <UseEffectDemo2 /> */}
      <button onClick={()=>{setFlag(!flag)}}>Update</button>
      {flag ? <UseEffectDemo3 /> : null}
    </div>
  );
}
