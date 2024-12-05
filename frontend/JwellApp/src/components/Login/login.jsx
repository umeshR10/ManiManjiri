import './login.css'
import Form from "react-bootstrap/Form";


const Login = () => {
  return (
    <>
      <div className="container-fluid main-cont d-flex flex-column justify-content-center align-items-center">
        <h3 className='mb-3'>Login Form</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Enter  Password" />
          </Form.Group>
          <button className="btn btn-outline-primary" type="submit">
            login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
