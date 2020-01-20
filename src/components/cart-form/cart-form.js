import React from "react";
import { Field, reduxForm } from "redux-form";

import "./cart-form.css";
import { OrderService } from "../../services/order-service";

const orderService = new OrderService();

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
      <button type="submit" className="btn btn-primary width-btn">
        ORDER
      </button>
    </form>
  );
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  
  <React.Fragment>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
    />
    {touched && error && <span style={{ color: "red" }}>{error}</span>}
  </React.Fragment>
);


const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "All fields are REQUIRED";
  }
  if (!values.lastname) {
    errors.lastname = "All fields are REQUIRED";
  }
  if (!values.address) {
    errors.address = "All fields are REQUIRED";
  }
  if (!values.phone) {
    errors.phone = "All fields are REQUIRED";
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "Phone must be a number!";
  }
  return errors;
};

export default reduxForm({
  form: "orderForm",
  validate
})(Form);
