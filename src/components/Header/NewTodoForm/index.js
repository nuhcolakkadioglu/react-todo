import React from 'react'
import { Formik, Field, Form } from 'formik';
import validation from './validation'
import { useTodo } from '../../../contexts/TodoContext'
function NewTodoForm() {
    const { setTodos, addTodo } = useTodo();
    return (
        <Formik
            initialValues={{
                text: ''
            }}
            onSubmit={(values, bag) => {
                bag.resetForm();
                addTodo(values.text)
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