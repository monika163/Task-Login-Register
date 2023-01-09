import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                    <br></br>
                        
                        <Container>

                        <Table striped bordered hover>
      <thead>
        <tr>
          <th> Full Name</th>
          <th> User Name</th> 
          <th> Select Country</th> 
          <th> Mobile Number</th> 
          <th>Email</th>
          <th>Password</th>
          <th>Referral Id </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{logindata[0].name}</td>
          <td>{logindata[0].username}</td>
          <td>{logindata[0].country}</td>
          <td>{logindata[0].mobilenumber}</td>
          <td>{logindata[0].email}</td>
          <td>{logindata[0].password}</td>
          <td>{logindata[0].referralid}</td>

        
          
        </tr>
      
      </tbody>
    </Table>

    <Button onClick={userlogout}>LogOut</Button>
    </Container>
                    

                {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }   
                     
                    </>
            }
        </>
    )
}

export default Details






















