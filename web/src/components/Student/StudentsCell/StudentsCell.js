import { Link, routes } from '@redwoodjs/router'

import Students from 'src/components/Student/Students'

export const QUERY = gql`
  query FindStudents {
    students {
      id
      email
      firstName
      lastName
      role
      courseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No students yet. '}
      <Link to={routes.newStudent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ students }) => {
  return <Students students={students} />
}
