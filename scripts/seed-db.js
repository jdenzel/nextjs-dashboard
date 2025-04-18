// scripts/seed-db.js
require('dotenv').config();
async function main() {
  try {
    // Dynamically import the seed function
    const { seedDatabase } = await import('../app/seed/route.js');
    await seedDatabase();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

main();