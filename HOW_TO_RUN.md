# Yes Investree Project - How to Run

## Prerequisites
- Docker Desktop
- Git

## Architecture
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Next.js        │────▶│  Strapi         │────▶│  MySQL          │
│  Frontend       │     │  Backend        │     │  Database       │
│  Port: 3000     │     │  Port: 1337     │     │  Port: 3307     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Step 1: Create Docker Network (Up to choice deployment)
```bash
docker network create develop_network
docker network create staging_network
docker network create production_network
```

## Step 2: Start Database
```bash
cd yes-investree-project-database
docker compose up -d
```
Wait until MySQL is healthy (check with `docker ps`).

## Step 3: Start Backend (Strapi)
```bash
cd yes-investree-project-backend
docker compose up -d
```
Wait until Strapi is ready at http://localhost:1337

## Step 3.5: Seed Database (Optional)
```bash
docker exec -it investree_backend npm run seed:example
```
This will import example data (categories, authors, articles) into Strapi. Only runs once - if you need to re-seed, clear the database first.

## Step 4: Start Frontend (Next.js)
```bash
cd yes-investree-project
docker compose up -d --build
```

## Verify All Services
```bash
docker ps
```
Should show 3 containers:
- `investree_mysql` (port 3307)
- `investree_backend` (port 1337)
- `investree_frontend` (port 3000)

## Access
- Frontend: http://localhost:3000
- Strapi Admin: http://localhost:1337/admin
- Database: localhost:3307 (MySQL client)

## Stop All Services
```bash
# Stop frontend
cd yes-investree-project && docker compose down

# Stop backend
cd yes-investree-project-backend && docker compose down

# Stop database
cd yes-investree-project-database && docker compose down
```

## Troubleshooting

### Frontend build fails with API connection error
The frontend must be built AFTER Strapi is running because Next.js fetches data at build time via `getStaticProps`.

### Network issues
Ensure all services use `develop_network`:
```bash
docker network inspect develop_network
```

### Reset everything
```bash
docker compose down -v  # in each project folder
docker network rm develop_network
```
