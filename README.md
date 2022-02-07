# Create Awesome App

This is a scaffold to quickly get coding with the following technologies:

| Component        | Technology                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Server           | [Node.js](https://nodejs.org/) v16                                                                                                       |
| Database         | [PostgreSQL](https://www.postgresql.org/) v14                                                                                            |
| UI               | [React](https://reactjs.org/) v17                                                                                                        |
| Framework        | [Next.js](https://nextjs.org/) v12                                                                                                       |
| ORM              | [Prisma](https://www.prisma.io/) v3                                                                                                      |
| Containerization | [Docker](https://www.docker.com/) v19 with [docker-compose](https://docs.docker.com/compose/)                                            |
| Type system      | [TypeScript](https://www.typescriptlang.org/) v4                                                                                         |
| Testing          | [Jest](https://jestjs.io/) v27 with [next/jest integration](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)      |
| Linting          | [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) on pre-commit with [lint-staged](https://github.com/okonet/lint-staged) |

## Getting started

1. Fork this repository
2. `docker-compose up`
3. `./run.sh npx prisma migrate dev`
4. Site is available at [localhost:3000](http://localhost:3000) - start hacking!

## Developing

- Run development migrations using `./run.sh npm run prisma:migrate -- <MIGRATION_NAME>`
- Inspect your database state using `./run.sh npm run prisma:studio`

## Production

To build static assets and serve a production-ready app:  
`NODE_ENV=production docker-compose up`

## TODO

- [ ] Use next/lint instead of custom eslint integration, drop lint-staged?
- [ ] Tests for API endpoints
- [ ] joi or other Swagger (UI)-generating validation library for endpoints
- [ ] Next-auth
- [ ] (One-click) deploy to Heroku
- [ ] Pre-commit hooks to run inside Docker?
