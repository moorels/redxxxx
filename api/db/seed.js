/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  console.warn('Please define your seed data.')

  await db.course.create({
    data: {
      name: 'red3',
    },
  })

  await db.student.create({
    data: {
      email: 'sales@micropls.com',
      firstName: 'Robert',
      lastName: 'Morels',
      role: 'Student',
      courseId: 1,
    },
  })

  await db.grade.create({
    data: {
      grade: 'A',
      studentId: 1,
    },
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
