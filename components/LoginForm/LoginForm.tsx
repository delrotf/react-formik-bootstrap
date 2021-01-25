import { Formik, Form } from "formik";
import React, { useContext, useState } from "react";
import { Button, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "..";
import { LoginContext } from "../../context";
import { DynamicTable } from "../DynamicTable/DynamicTable";

const LoginForm = props => {
  const {setRowCount, setColumnCount} = useContext(LoginContext);

  const formValues = {
    rowCount: 0,
    columnCount: 0
  };

  const validationSchema = Yup.object({
    rowCount: Yup.number().required("This field is required.").positive("Must be positive").integer("No Decimal"),
    columnCount: Yup.number().required("This field is required.").positive("Must be positive").integer("No Decimal"),
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
    </div>
  );
};

export { LoginForm };
