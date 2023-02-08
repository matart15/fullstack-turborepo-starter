# workflow with helpers

0. `nps dev` to start containers
1. define database model in `apps/api/prisma/schema.prisma`
2. `nps prisma.migrate`
3. define seed data in `apps/api/prisma/seed.ts`
4. `nps prisma.seed`
   - if there is already same data exists, You may meet with `Unique constraint failed on the fields` error. because we can't input same data twice if it has unique field
   - prisma migrate runs seed. So,
5. `nps prisma.generate`
6. `nps generate.api` and input model name.
   - make sure to add modeuls and resolvers into `app.modeule.ts`
   - this will create you CRUD operation api
   - need to restart backend server to generate graphql. stop and restart `nps dev`
7. `nps codegen` to generate client code
8. `nps generate.page.list` to generate list page
   - it will create list page, list query and list component with `nps generate.component.list` command
   - change `customField` into own model fields
9. `nps generate.page.edit` to generate edit page
   - it will create edit page, edit query, form component and validation with `nps generate.component.form` command
   - change `customField` into own model fields
