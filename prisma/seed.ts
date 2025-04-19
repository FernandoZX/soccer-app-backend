/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear equipos si no existen
  const equipo1 = await prisma.equipo.upsert({
    where: { id: 1 },
    update: {},
    create: { nombre: 'Barcelona' },
  });

  const equipo2 = await prisma.equipo.upsert({
    where: { id: 2 },
    update: {},
    create: { nombre: 'Real Madrid' },
  });

  const equipo3 = await prisma.equipo.upsert({
    where: { id: 3 },
    update: {},
    create: { nombre: 'Atlético Nacional' },
  });

  const equipo4 = await prisma.equipo.upsert({
    where: { id: 4 },
    update: {},
    create: { nombre: 'Junior de Barranquilla' },
  });

  // Crear partidos con connect
  await prisma.partido.createMany({
    data: [
      {
        equipoLocalId: equipo1.id,
        equipoVisitaId: equipo2.id,
        fecha: new Date('2025-05-01T19:00:00Z'),
      },
      {
        equipoLocalId: equipo2.id,
        equipoVisitaId: equipo3.id,
        fecha: new Date('2025-05-08T19:00:00Z'),
      },
      {
        equipoLocalId: equipo3.id,
        equipoVisitaId: equipo1.id,
        fecha: new Date('2025-05-15T19:00:00Z'),
      },
      {
        equipoLocalId: equipo3.id,
        equipoVisitaId: equipo1.id,
        fecha: new Date('2025-05-15T19:00:00Z'),
      },
      {
        equipoLocalId: equipo3.id,
        equipoVisitaId: equipo4.id,
        fecha: new Date('2025-05-15T19:00:00Z'),
      },
      {
        equipoLocalId: equipo4.id,
        equipoVisitaId: equipo2.id,
        fecha: new Date('2025-05-15T19:00:00Z'),
      },
    ],
  });

  console.log('✅ Equipos y partidos creados');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
