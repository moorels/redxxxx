import { Link, routes } from '@redwoodjs/router'
import styles from './Dash.module.css'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import StudentCell from 'src/components/Student/StudentCell'
import { useState } from 'react'

// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM
// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM
// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM

const DashboardPage = () => {
  const [num, setNum] = useState(0)

  const onSubmit = (data) => {
    console.info(data)
    setNum(data.intField)
    return data
  }

  return (
    <>
      <StudentCell id={num} />
      <h1 className={styles.test}>Dashboard</h1>

      <Form onSubmit={onSubmit}>
        <TextField
          name="intField"
          defaultValue=""
          transformValue="Int"
          validation={{ required: true }}
        />
        <Submit className="button">Submit</Submit>
      </Form>
      <p>test</p>
    </>
  )
}

// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM
// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM
// IMPORTANT FOUND METHOD TO GET STUDENT FROM A FORM

export default DashboardPage
