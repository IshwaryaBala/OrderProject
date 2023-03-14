
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker,Table,Button, Popover,TimePicker, Upload, Select, Modal } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
import { Notepad2, Clock, CalendarCircle, Trash, DocumentText ,Magicpen, Receipt1,TickCircle ,SmsTracking, CloseCircle} from "iconsax-react";
import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [open, setOpen] = useState(false);
  const Option = Select.Option;

  const handleok = () =>{
    setOpen(false);
  }
  const handleCancel = () => {
    setOpen(false);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }


  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    OrderNumber: `Edward King ${i}`,
    OrderType: `print Orders ${i}`,
    ProjectNumber:`General Overhead ${i}`,
    DateSubmitted:`Feb 20th, 2023 at 09:00:00 PM ${i}`,
    Submittedby:`Kenny McCoig ${i}`,
    DueDate:`Feb 24th, 2023 at 09:00:00 PM ${i}`,
    Complete:`0.00% ${i}`,
  });
}
const columns = [
  {
    title: "Order Number",
    dataIndex: "OrderNumber",
    key: "OrderNumber",
    width: '60rem',

  },
  {
    title: "Order Type",
    dataIndex: "OrderType",
    key: "OrderType",
    width: '50rem',
  },
  {
    title: "Project Number",
    dataIndex: "ProjectNumber",
    key: "ProjectNumber",
    width: '50rem',
  },
  {
    title: "Date Submitted",
    dataIndex: "DateSubmitted",
    key: "DateSubmitted",
    width: '50rem',
    // render(text, record) {
    //   return {
    //     props: {
    //       style: { background: "red"  }
    //     },
    //   };
    // }
  },
  {
    title: "Submitted By",
    dataIndex: "Submittedby",
    key: "Submittedby",
    width: '50rem',
  },
  {
    title: "Due Date",
    dataIndex: "DueDate",
    key: "DueDate",
    width: '50rem',
  },
  {
    title: "% Complete",
    dataIndex: "Complete",
    key: "Complete",
    width: '50rem',
  },
  {
    title: "Order Actions",
    dataIndex: "OrderActions",
    key: "contact",
    width: '130rem',

    render: (text, record) => {
      return (
        <div className="">
          <Row>
            <Col >
            <Row>
          <Col sm="1"> 
          <DocumentText size="16"color="#264B5D"/>
          </Col >
          <Col sm="1">
          <Magicpen size="16" color="#264B5D"/>
          </Col>
          <Col sm="1">
          <Trash size="16" color="#264B5D"/>
          </Col>
          
        </Row>
        <Row className="mt-1">
          <Col sm="1">
          <SmsTracking size="16"color="#264B5D"/>
          </Col >
          <Col sm="1">
          <Receipt1 size="16" color="#264B5D"/>
          </Col>
          <Col sm="1">
          <TickCircle size="16" color="#264B5D"/>
          </Col>
        </Row>
            </Col>
      <div className="mt-2 pt-1">
      <Col sm="1">
        <CloseCircle size="16" color="#264B5D"/>
        </Col>
      </div>
        
        </Row>
        </div>
      );
    },
  },

];
const content = (
  <div>
    <p>View Details</p>
  </div>
);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="  ">
        <Row className=" p-4">
          <Col xl="3">
            <div className="">
            <label className="labels-e pb-2">Filter by</label>
                  <Select
                    showSearch
                    size={"large"}
                    style={{ width: '100%' }}

                    placeholder="Type to Search..."

                  > </Select>
            </div>
        
          </Col>
          <Col xl="3">
          <label for="start" className="labels-e">Start Date</label>
                  
                    {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
                    <DatePicker
                      name={""}
                      className="inputs"
                      suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                      placeholder="Select..."
                      hideTime
                      format="MM/DD/YYYY" />
                
          </Col>
          <Col xl="3">
          <label for="start" className="labels-e">End Date</label>
                  
                    {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
                    <DatePicker
                      name={""}
                      className="inputs"
                      suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                      placeholder="Select..."
                      hideTime
                      format="MM/DD/YYYY" />
                
          </Col> 
           
           <Col>
            <div className="pt-3 ">
            <button type="submit" className=" button-order mt-4 ">
               Apply Filter
           </button>
            </div>
         
          </Col>
         
          <Col >
          <div className="pt-3 ">
          <button type="submit" className=" button-order-1 mt-4  ">
              Reset
           </button>
           </div>
          </Col>
        
     
        </Row>
        <Row className="p-4">
                  <Table rowClassName={(record, index) => index % 3 === 0 ? 'table-row-light' :  'table-row-dark  ' } columns={columns} dataSource={data} pagination={false} />
                </Row>
      </Container>
    </>
  );
};

export default Index;