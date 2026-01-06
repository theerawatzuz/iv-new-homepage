# Backend (Strapi) Setup

## วิธีการรัน Backend

1. **ต้องรัน Database ก่อน** (ใน yes-investree-project-database)

2. เข้าไปในโฟลเดอร์ backend:
```bash
cd yes-investree-project-backend
```

3. รัน backend service:
```bash
docker compose up -d --build
```

4. ตรวจสอบสถานะ:
```bash
docker compose ps
```

5. ดู logs:
```bash
docker compose logs -f backend
```

## การเข้าถึง

- **Strapi Admin**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

## หมายเหตุ

- ต้องรัน database service ก่อน
- ครั้งแรกต้องสร้าง admin user ใน Strapi
- Backend จะเชื่อมต่อกับ database ผ่าน Docker network