import { Formik, Form } from "formik";
import React, { useContext, useState } from "react";
import { Button, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "..";
import { DynamicTable } from "..";

const LoginForm = props => {
  const [rowCount, setRowCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);

  const formValues = {
    rowCount: 0,
    columnCount: 0
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("This field is required."),
    lastname: Yup.string().required("This field is required."),
    email: Yup.string()
      .required("This field is required.")
      .email("Invalid format."),
    password: Yup.string()
      .required("This field is required.")
      .min(8, "At least ${min} characters.")
  });

  const onSubmit = values => {
    setRowCount(values.rowCount);
    setColumnCount(values.columnCount);
    console.log("values", values);
  };

  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="p-3">
              <BsForm.Row>
                <Input
                  controlId="rowCount"
                  name="rowCount"
                  type="number"
                  label="Row"
                  hint="Count of rows"
                />
                <Input
                  controlId="columnCount"
                  name="columnCount"
                  type="number"
                  label="Column"
                  hint="Count of columns"
                />
              </BsForm.Row>
            </div>
            <div className="d-flex p-3">
              <Button variant="light" className="flex-fill" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <DynamicTable rowCount={rowCount} columnCount={columnCount} />
    </div>
  );
};

export { LoginForm };
