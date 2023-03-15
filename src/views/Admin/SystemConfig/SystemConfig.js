import { useState } from "react";
import {  Input} from 'antd';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const SystemConfig = (props) => {
  
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  
  return (
    <>
      <Header />
      {/* Page content */}

      <Container fluid className="pl-4 ml-3">
        {
          borderBoxOpen ?
            <Card className=" borderBox mb-5 ml-10" >
              <div className="d-flex">
              </div>
            </Card> : ''
        }
        <Row>
          <Col >
            <Card className="bg-white " >
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className=" header-white ls-1 mb-1" style={{ color: "#7E7E7E" }}>
                      File Share Path
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>

                <div className="mt-1" style={{ fontweight: 500,lineheight: "16px", fontSize: 12, color: '#000000' }}>
                  File Share Path
                </div>
                {/* <Row className="align-items-center pt-3"> */}
                <Row className="mt-2">
                  <Col className=' header-3 font12'>
                    <Input
                      type="text"
                      size={"large"}
                      color= {"#7E7E7E"} 
                      style={{ width: '100%' }}
                      placeholder="Set global file share path..."
                    />
                  </Col>
                  </Row>
                <div style={{marginTop : 400 }}>
                  <Button type="submit" onClick={() => setPopUpOpen(true)} >
                    Save Changes
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default SystemConfig;

