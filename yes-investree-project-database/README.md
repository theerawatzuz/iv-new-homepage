# Database Setup

## วิธีการรัน Database

1. เข้าไปในโฟลเดอร์ database:
```bash
cd yes-investree-project-database
```

2. รัน database service:
```bash
docker compose up -d
```

3. ตรวจสอบสถานะ:
```bash
docker compose ps
```

4. ดู logs:
```bash
docker compose logs -f db
```

## การเข้าถึง

- **MySQL**: localhost:3307
- **PHPMyAdmin**: http://localhost:8080
  - Username: root
  - Password: root

## หมายเหตุ

- Database จะสร้าง network ชื่อ `investree_network` 
- ต้องรัน database ก่อน backend และ frontend
- ข้อมูลจะถูกเก็บใน volume `mysql_data`