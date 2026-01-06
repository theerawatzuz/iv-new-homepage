# Frontend (Next.js) Setup

## วิธีการรัน Frontend

1. **ต้องรัน Database และ Backend ก่อน**

2. เข้าไปในโฟลเดอร์ frontend:
```bash
cd yes-investree-project
```

3. รัน frontend service:
```bash
docker compose up -d --build
```

4. ตรวจสอบสถานะ:
```bash
docker compose ps
```

5. ดู logs:
```bash
docker compose logs -f frontend
```

## การเข้าถึง

- **Website**: http://localhost:3000

## หมายเหตุ

- ต้องรัน database และ backend services ก่อน
- Frontend จะเรียก API จาก backend ที่ port 1337