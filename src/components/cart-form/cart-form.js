import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField'; 

import "./cart-form.css";
import { OrderService } from "../../services/order-service";

const orderService = new OrderService();

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  
  <React.Fragment>
    <TextField id="outlined-basic"
      {...input}
      error= {touched && error && true}
      helperText= {touched && error}
      label={label}
      type={type}
      className="form-control"
      variant="outlined"
    />
  </React.Fragment>
);


const Form = props => {
  const { handleSubmit, orderCreated } = props;

  return (
    <form
      onSubmit={handleSubmit(
        items =>
          orderService.sendOrderToDB(items).then(
            res => res !== true ? alert("Rejected: " + res) : orderCreated() 
          )
      )}
    >
      <div className="form-group">
        <Field
          name="firstname"
          type="text"
          component={renderField}
          label="NAME"
        />
      </div>
      <div className="form-group">
        <Field
          name="lastname"
          type="text"
          component={renderField}
          label="SURNAME"
        />
      </div>
      <div className="form-group">
        <Field
          name="address"
          type="text"
          component={renderField}
          label="ADDRESS"
        />
      </div>
      <div className="form-group">
        <Field
          name="phone"
          type="tel"
          component={renderField}
          label="PHONE"
        />
      </div>
      <button type="submit" className="btn btn-outline-danger width-btn">
        ORDER
      </button>
    </form>
  );
};



const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Name field is required!";
  }
  if (!values.lastname) {
    errors.lastname = "Surname field is required!";
  }
  if (!values.address) {
    errors.address = "Address field is required!";
  }
  if (!values.phone) {
    errors.phone = "Phone field is required";
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "Phone must be a number!";
  }
  return errors;
};

export default reduxForm({
  form: "orderForm",
  validate
})(Form);
