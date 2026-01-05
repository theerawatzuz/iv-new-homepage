# Yes Investree Project

## โครงสร้างโปรเจ็กต์

โปรเจ็กต์นี้แบ่งออกเป็น 3 ส่วนหลัก:

- `yes-investree-project-database/` - MySQL Database + PHPMyAdmin
- `yes-investree-project-backend/` - Strapi CMS Backend
- `yes-investree-project/` - Next.js Frontend

## วิธีการรันทั้งหมด (แบบแยกส่วน)

### ขั้นตอนที่ 1: รัน Database
```bash
cd yes-investree-project-database
docker compose up -d
```

### ขั้นตอนที่ 2: รัน Backend
```bash
cd ../yes-investree-project-backend
docker compose up -d --build
```

### ขั้นตอนที่ 3: รัน Frontend
```bash
cd ../yes-investree-project
docker compose up -d --build
```

## การเข้าถึงบริการ

- **Frontend**: http://localhost:3000
- **Backend (Strapi)**: http://localhost:1337
- **PHPMyAdmin**: http://localhost:8080
- **MySQL**: localhost:3307

## การหยุดบริการ

```bash
# หยุดทีละส่วน
cd yes-investree-project
docker compose down

cd ../yes-investree-project-backend
docker compose down

cd ../yes-investree-project-database
docker compose down
```

## หมายเหตุ

- ต้องรันตามลำดับ: Database → Backend → Frontend
- ครั้งแรกต้องสร้าง admin user ใน Strapi Admin Panel
- ข้อมูลจะถูกเก็บใน Docker volumes

## ข้อมูลสภาพแวดล้อม (Environment)
• โปรเจ็กต์นี้เตรียมไว้ให้รันผ่าน Docker Compose เป็นหลัก: service strapi สร้าง image จาก Dockerfile เดิม 
และ service db ใช้ mysql:8.0. ดังนั้น production/deployment ปกติจะใช้ Docker 
(ไม่ใช่การรัน npm run develop บนเครื่องโดยตรง ยกเว้นตอนพัฒนา local หากต้องการ)
• ฐานข้อมูล MySQL ติดตั้งผ่าน container db ใน docker-compose.yml ไม่ได้ใช้ XAMPP หรือ installer อื่น

## ข้อมูลการเชื่อมต่อฐานข้อมูล (Database Configuration)
• ค่าใน .env ตรงกับคอนฟิกที่ Strapi โหลดผ่าน config/database.ts:
DATABASE_HOST=db ➜ host คือ service ชื่อ db ใน Docker network
DATABASE_PORT=3306
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi-user
DATABASE_PASSWORD=InvestreeDb123
• Strapi service map port 1337:1337 สำหรับ HTTP และอาศัย env เหล่านี้ผ่าน env_file: .env

## ขั้นตอนการสร้างฐานข้อมูล (Database Initialization)
• ใน docker-compose.yml service db กำหนด MYSQL_DATABASE=${DATABASE_NAME}, MYSQL_USER, MYSQL_PASSWORD 
ดังนั้นเมื่อ docker compose up ครั้งแรก MySQL container จะสร้าง database strapi และ user strapi-user อัตโนมัติ 
ไม่จำเป็นต้องรัน CREATE DATABASE เองเว้นแต่ว่า volume ถูกลบหรือค่า env เปลี่ยน

• หากพบ error "Unknown database" แสดงว่า:
- Database volume ว่างหรือถูกรีเซ็ต แต่ container db ไม่ได้ถูก recreate พร้อม env (เช่น ใช้ volume เก่า)
- ค่า DATABASE_NAME ฝั่ง Strapi ไม่ตรงกับ MYSQL_DATABASE ที่ใช้สร้างในครั้งแรก
- Strapi container พยายามต่อฐานข้อมูลภายนอก Docker (ไม่ใช่ service db) เช่นเมื่อรัน npm run develop บนเครื่อง 
แต่อยู่คนละ network จึงหา host db ไม่เจอ → ต้องปรับ host เป็น localhost/IP จริง หรือรันผ่าน Docker ทั้งคู่

• ตรวจสอบว่า Strapi และ MySQL อยู่ใน network เดียวกัน (ใช้ docker network ls / docker compose ps). 
หากต้องเชื่อมกับ MySQL ภายนอก Docker ให้เปลี่ยน DATABASE_HOST เป็น IP/hostname ที่เข้าถึงได้ และเปิดพอร์ต 3306 ให้ตรงกัน