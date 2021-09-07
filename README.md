# Create Awesome App

This is a scaffold to quickly get coding with the following technologies:
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) & [docker-compose](https://docs.docker.com/compose/)
- [Jest](https://jestjs.io/) with [ts-jest](https://kulshekhar.github.io/ts-jest/) for testing

## Getting started

1. Fork this repository
2. `docker-compose up`
3. `./scripts/run.sh npx prisma migrate dev`
4. Site is available at [localhost:3000](http://localhost:3000) - start hacking!

## Developing

- Run development migrations using `./scripts/run.sh npm run prisma:migrate -- <MIGRATION_NAME>`
- Inspect your database state using `./scripts/run.sh npm run prisma:studio`

## Production

To build static assets and serve a production-ready app:  
`NODE_ENV=production docker-compose up`

## TODO
- [ ] Tests for API endpoints
- [ ] joi or other Swagger (UI)-generating validation library for endpoints 
- [ ] Next-auth
- [ ] Husky, Prettier, pretty-quick
