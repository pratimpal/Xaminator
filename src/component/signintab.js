import React from 'react';
import Form from 'react-bootstrap/Form'

function Signintab() {

  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Form.Row}>
                <Form.Check
                    type="radio"
                    label="student"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="admin"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Master Password</Form.Label>
                <Form.Control type="password" placeholder="Master Password" />
            </Form.Group>

            <Form.Group>
                <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                id="validationFormik0"
                />
            </Form.Group>
        </Form> 
    );
  }
  
export default Signintab;