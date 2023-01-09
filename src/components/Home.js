import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        username : "",
        country : "",
        mobilenumber : "",
        email: "",
        password: "",
        referralid : ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, username,country, mobilenumber,  email, password, referralid } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        }  else if (username === "") {
            toast.error('use - name field is requred!',{
               position: "top-center",
           });
       }
       else if (country === "") {
        toast.error('use - name field is requred!',{
           position: "top-center",
       });
   }

       else if (mobilenumber.length < 9) {
        toast.error('mobile number should be 10',{
           position: "top-center",
       });
   }

        else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } 
        else if (referralid.length < 5) {
            toast.error('password length greater five',{
               position: "top-center",
           });
       }
       else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your  Full Name" />
                            </Form.Group>



                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

<Form.Control type="text" name='username' onChange={getdata} placeholder="Enter User Name" />
</Form.Group>


<Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
<Form.Select aria-label="Default select example" name = "country" onChange={getdata}>
      <option  value = "select country" name = "country"> Select Country </option>
      <option value="india">india</option>
      <option value="japan">japan</option>
      <option value="shri lanka">shri lanka</option>
    </Form.Select>
    </Form.Group>


<Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

<Form.Control type="tel" name='mobilenumber' onChange={getdata} placeholder="Enter Mobile Number" />
</Form.Group>



                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                         

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

<Form.Control type="text" name='referralid' onChange={getdata} placeholder="Referral Id" />
</Form.Group> 


                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home