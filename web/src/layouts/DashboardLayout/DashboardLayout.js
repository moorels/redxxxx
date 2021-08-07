import styled from 'styled-components';
import { Link, routes } from '@redwoodjs/router'

const DashboardLayout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Link to={routes.dashboard()}>Dashboard</Link>
        <Link to={routes.courses()}>Courses</Link>
        <Link to={routes.students()}>Students</Link>
        <Link to={routes.grades()}>Grades</Link>
      </Nav>
      <ComponentHolder>{children}</ComponentHolder>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 10px;
`

const ComponentHolder = styled.div`
  padding: 24px;
  width: 75%;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px dolid #e35cf1;
  width: 20%;
  & > * {
    padding-bottom: 8px;
  }
`

export default DashboardLayout
