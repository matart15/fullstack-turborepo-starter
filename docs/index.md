# workflow with helpers

0. `nps dev` to start containers
1. define database model in `apps/api/prisma/schema.prisma`
2. `nps prisma.migrate`
3. define seed data in `apps/api/prisma/seed.ts`
4. `nps prisma.seed`
5. `nps prisma.generate`
6. `nps generate.api` and input model name. make sure to add modeuls and resolvers into `app.modeule.ts`
