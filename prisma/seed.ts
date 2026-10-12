import { prisma } from "./lib/prisma";

async function main() {
  // Bestehende Testdaten löschen
  await prisma.contactMessage.deleteMany();

  // Testnachricht erstellen
  const message = await prisma.contactMessage.create({
    data: {
      name: "Max Mustermann",
      email: "max@example.com",
      subject: "Interesse an deinem Portfolio",
      message: "Hallo Aksaiya, ich habe dein Portfolio gesehen und wollte dir schreiben.",
    },
  });

  console.log("Seed-Daten erstellt:", message);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });