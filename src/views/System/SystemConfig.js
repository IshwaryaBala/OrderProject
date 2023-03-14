
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Modal } from 'antd';
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Progress,
  Table,
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
import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

const SystemConfig = (props) => {
  const [popUpOpen2, setPopUp2] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  const [firstDropdownValue, setFirstDropdownValue] = useState('');
  const [orderDropdownValue, setOrderDropdownValue] = useState('');
  const [dateChange, setDateChange] = useState('');
  const [timeChange, setTimeChange] = useState('');
  const Option = Select.Option;

  const handlePopUp2Ok = () => {
    setPopUp2(false);

  }
  const handlePopUp2Cancel = () => {
    setPopUp2(false);

  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="pl-4 ml-3">

      </Container>
    </>
  );
};

export default SystemConfig;