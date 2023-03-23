// import Navbar from "./components/navbar/Navbar"
// import "./components/navbar/style.css"; //common css er jonno
// import Banner from "./components/banner/Banner";
// import Service from "./components/service/Service";
// import Digital from "./components/digital/Digital";
// import Work from "./components/work/Work";
// import Counting from "./components/counting/Counting";
// import Global from "./components/global/Global";
// import Customer from "./components/customer/Customer";

import { useEffect, useState } from 'react';
import { getDatabase, ref, set, push, onValue} from "firebase/database";
import {Container, Button, Form, Table} from 'react-bootstrap';

function App() {

  const db = getDatabase();
  let [batchname,setbatchname] = useState("");
  let [classname,setclassname] = useState("");
  let [classtopic,setclasstopic] = useState("");
  let [details,setDetails] = useState([]);
  let [check,setCheck] = useState(false);
  // let [attendance,setAttendance] = useState(true);


  let handleBatchName = (e) => {
    setbatchname(e.target.value);
};
  let handleClassName = (e) => {
    setclassname(e.target.value);
};
  let handleClassTopic = (e) => {
    setclasstopic(e.target.value);
};


  let arr = [];
  let handleAttendance = (name) => {

    if(arr.indexOf(name) == -1){
      arr.push(name);
    }else{
      arr.splice(arr.indexOf(name),1);
    }

      // if(attendance){
      //     setAttendance(true);
      // }else{
      //   setAttendance(false);
      // }
};
let handleSubmit= (e)=>{
  e.preventDefault();

    let info = {
      batchname : batchname,
      classname : classname,
      classtopic : classtopic,
      present : arr,
      
    };

    set (push(ref(db, "present")), info).then( ()=>{
        setCheck(!check);
    }); 
      // console.log(info);
};
  
 useEffect( () => {
  let attarr = []
  onValue(ref(db, "present"), (snapshot) => {
    snapshot.forEach(item =>{
      attarr.push(item.val());
    });
    setDetails(attarr);
  });
  
 },[check]);

  return (
    <Container>
       <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Batch Name</Form.Label>
            <Form.Control type="text" onChange={handleBatchName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>class number</Form.Label>
            <Form.Control type="text" onChange={handleClassName}/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>class topic</Form.Label>
            <Form.Control type="text" onChange={handleClassTopic} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox1">
            <Form.Check type="checkbox" onChange={()=>handleAttendance("sumona")} /*value={attendance}*/ label="Sumona" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox2">
            <Form.Check type="checkbox" onChange={()=>handleAttendance("Sarmin")} label="Sarmin" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox3">
            <Form.Check type="checkbox" onChange={()=>handleAttendance("Ria")} label="Ria" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox4">
            <Form.Check type="checkbox" onChange={()=>handleAttendance("Rimjhim")} label="Rimjhim" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox5">
            <Form.Check type="checkbox"onChange={()=>handleAttendance("Mitisha")}  label="Mitisha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox6">
            <Form.Check type="checkbox" onChange={()=>handleAttendance("Nafisa")} label="Nafisa" />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} type="submit"> Submit </Button>
    </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>class number</th> 
          <th>student name</th> 
        </tr>
      </thead>
      <tbody>
        {details.map((item) => (
          <tr>
            <td>{item.classname}</td>
            {item.present.map((att) =>(
              <>
                 <td>{att}</td>
              </>
            ))}
          </tr>     
        ) )}
         
      </tbody>
    </Table>
       
       
       
        {/* <Navbar/>
        <Banner/>
        <Service/>
        <Digital/>
        <Work/>
        <Counting/>
        <Global/>
        <Customer/> */}
    </Container>
);
}

export default App;

