export const schema = gql`
  type Grade {
    id: Int!
    grade: String!
    student: Student!
    studentId: Int!
  }

  type Query {
    grades: [Grade!]!
    grade(id: Int!): Grade
  }

  input CreateGradeInput {
    grade: String!
    studentId: Int!
  }

  input UpdateGradeInput {
    grade: String
    studentId: Int
  }

  type Mutation {
    createGrade(input: CreateGradeInput!): Grade!
    updateGrade(id: Int!, input: UpdateGradeInput!): Grade!
    deleteGrade(id: Int!): Grade!
  }
`
