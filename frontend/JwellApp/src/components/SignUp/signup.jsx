import "./signup.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SignUp = () => {
  return (
    <div className=" signup-form-container container-fluid">
      <h3 className="text-center"> Registration Form </h3>
      <form className="row">
        <Form.Group
          className="mb-3 mt-3 col-sm-12 col-md-6 col-lg-6"
          controlId="formGroupEmail"
        >
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group
          className="mb-3 mt-3 col-sm-12 col-md-6 col-lg-6"
          controlId="formGroupPassword"
        >
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3 col-sm-12" controlId="formGroupAddress">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter City" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option> <option>Andhra Pradesh</option> <option>Arunachal Pradesh</option> <option>Assam</option>
            <option>Bihar</option> <option>Cattisgarh</option> <option>Goa</option> <option>Gujrat</option> <option>Haryana</option>
            <option>Himachal Pradesh</option> <option>Jharkhand</option> <option>Karnataka</option> <option>Kerala</option>
            <option>Madhya Pradesh</option> <option>Maharashtra</option> <option>Manipur</option> <option>Meghalaya</option>
            <option>Mizoram</option> <option>Nagaland</option> <option>Odisa</option> <option>Punjab</option>
            <option>Rajashtan</option> <option>Sikkim</option> <option>Tamil Nadu</option> <option>Tripura</option>
            <option>Uttarakhanda</option> <option>Uttar Pradesh</option> <option>West Bengal</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="Enter Zip" />
        </Form.Group>
      </form>
        <Button  className="mt-3 btn btn-primary" type="submit">
          Submit
        </Button>
    </div>
  );
};
export default SignUp;
