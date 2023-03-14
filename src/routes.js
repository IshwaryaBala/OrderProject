/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";


import {Box1, Setting4 } from "iconsax-react";
import SystemConfig from "views/Admin/SystemConfig/SystemConfig";
import OrderManagement from "views/Admin/OrderManagement/OrderManagement";

var routes = [
  {
    path: "/ordermanagement",
    name: "Order Management",
    component: OrderManagement,
    layout: "/admin",
    icon: <Box1/>
  },
  {
    path: "/systemconfig",
    name: "System Config",
    component: SystemConfig,
    layout: "/admin",
    icon: <Setting4 variant="Outline"/>
  },
  // {
  //   path: "/electronic",
  //   name: "Electronic S and S",
  //   component: Electronic,
  //   layout: "/admin",
  //   // icon: <SmsTracking variant="Outline"/>
  // },
  // {
  //   path: "/usb",
  //   name: "USB / CD",
  //   component: USBCD,
  //   layout: "/client",
  //   icon: <Cd variant="Outline"/>
  // },
  // {
  //   path: "/chicago",
  //   name: "Chicago - Tree Towns",
  //   component: ChicagoTreeTown,
  //   layout: "/client",
  //   icon: <Tree variant="Outline"/>
  // },
  
];
export default routes;
