
import { prisma } from "./lib/prisma";

async function main() {
  // Testnachricht erstellen, ohne vorhandene Nachrichten zu löschen
  const message = await prisma.contactMessage.create({
    data: {
      name: "Max Mustermann",
      email: "max@example.com",
      subject: "Interesse an deinem Portfolio",
      message:
        "Hallo Aksaiya, ich habe dein Portfolio gesehen und wollte dir schreiben.",
    },
  });

  console.log("Seed-Daten erstellt:", message);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });