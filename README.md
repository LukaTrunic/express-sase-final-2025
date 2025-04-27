# express-sase-final-2025
 A school project for "Security Aspects in Software Engineering" course (BACKEND)

```
bun install
bun add express
bun add cors
bun add morgan
bun add mysql2
bun add typeorm

bun add bcrypt
bun add jsonwebtoken
bun add axios

bun add --dev @types/morgan
bun add --dev @types/cors
bun add --dev @types/bcrypt
bun add --dev @types/express
bun add --dev @types/jsonwebtoken

bunx typeorm-model-generator
```

`.env` example:
```
SERVER_PORT = 5000
DATABASE_HOST = localhost
DATABASE_PORT = 3306
DATABASE_USER = root
DATABASE_PASSWORD = root
DATABASE_NAME = sde_sase_2025
JWT_SECRET = e06a8e5f-2620-4d62-9ff3-1b08fbf4cac0
JWT_ACCESS_TTL = 15s
JWT_REFRESH_TTL = 7d
```