import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  const users = [];
  for (let i = 0; i < 1000000; i++) {
    users.push({
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      age: Math.floor(Math.random() * 60) + 18,
      gender: i % 2 === 0 ? 'Male' : 'Femaile',
      problems: Math.random() < 0.5,
    });
  }

  const chunkSize = 10000;
  for (let i = 0; i < users.length; i += chunkSize) {
    const chunk = users.slice(i, i + chunkSize);

    await prisma.user.createMany({ data: chunk });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('seeding stopped');
    await prisma.$disconnect();
  });
