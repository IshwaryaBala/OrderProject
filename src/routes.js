
import Index from "views/Index.js";
import Electronic from "views/Electronic-s/Electronic"; 

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