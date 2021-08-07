import { Link, routes } from '@redwoodjs/router'

import Courses from 'src/components/Course/Courses'

export const QUERY = gql`
  query FindCourses {
    courses {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No courses yet. '}
      <Link to={routes.newCourse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ courses }) => {
  return <Courses courses={courses} />
}
