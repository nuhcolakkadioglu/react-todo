import React from 'react'
import { Formik, Field, Form } from 'formik';
import validation from './validation'

function NewTodoForm() {
    return (
        <Formik
            initialValues={{
                text: ''
            }}
            onSubmit={(values, bag) => {
                bag.resetForm();
                console.log(values)
            }}

            validationSchema={validation}
        >

            <Form>
                <Field
                    id="text"
                    name="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus />
            </Form>
        </Formik>
    )
}

export default NewTodoForm