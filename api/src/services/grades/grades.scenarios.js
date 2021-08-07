export const standard = defineScenario({
  grade: {
    one: {
      grade: 'String',
      student: {
        create: {
          email: 'String7142373',
          firstName: 'String',
          lastName: 'String',
          role: 'String',
          course: { create: { name: 'String' } },
        },
      },
    },

    two: {
      grade: 'String',
      student: {
        create: {
          email: 'String4630058',
          firstName: 'String',
          lastName: 'String',
          role: 'String',
          course: { create: { name: 'String' } },
        },
      },
    },
  },
})
