# Checklist - สิ่งที่ต้องขอจาก Provider

## 1. Database
- [ ] MySQL dump file หรือ migration script (ข้อมูลเริ่มต้น)
- [ ] Database credentials ที่ถูกต้อง (username, password, database name)

## 2. Strapi Backend
- [ ] `.env` file ที่ครบถ้วน พร้อม:
  - DATABASE_HOST, DATABASE_PORT, DATABASE_NAME
  - DATABASE_USERNAME, DATABASE_PASSWORD
  - APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, JWT_SECRET
  - TRANSFER_TOKEN_SALT
- [ ] Strapi API Token สำหรับ Frontend เรียกใช้
- [ ] ข้อมูล Content ใน Strapi (export/import หรือ seed data)
- [ ] Dockerfile และ docker-compose.yml ที่ทำงานได้

## 3. Next.js Frontend
- [ ] `.env` file ที่ครบถ้วน พร้อม:
  - NEXT_PUBLIC_STRAPI_API_END_POINT
  - STRAPI_API_TOKEN (ต้องตรงกับที่สร้างใน Strapi)
  - NEXT_PUBLIC_MY_ENDPOINT
- [ ] Dockerfile และ docker-compose.yml ที่ทำงานได้

## 4. Docker Setup
- [ ] Network configuration (develop_network)
- [ ] Volume configuration สำหรับ persistent data
- [ ] ลำดับการ start services (Database → Backend → Frontend)

## 5. Documentation
- [ ] README หรือ HOW_TO_RUN ที่อธิบาย setup ครบถ้วน
- [ ] Environment variables ที่ต้องตั้งค่า
- [ ] Troubleshooting guide

---

## สิ่งที่ทำเองไปแล้ว (อาจถูก/ผิด)

| รายการ | สถานะ | หมายเหตุ |
|--------|-------|----------|
| docker-compose.yml (database) | ✅ ทำเอง | ใช้ MySQL 8.0, port 3307 |
| docker-compose.yml (backend) | ✅ ทำเอง | ต้องเช็ค env ว่าถูกไหม |
| docker-compose.yml (frontend) | ✅ ทำเอง | ใช้ network: host ตอน build |
| Dockerfile (frontend) | ✅ ทำเอง | เพิ่ม react-i18next |
| .env files | ⚠️ ไม่แน่ใจ | ต้องเช็คกับ provider |
| STRAPI_API_TOKEN | ⚠️ ไม่แน่ใจ | สร้างเองหรือ provider ให้? |
| Database data | ❌ ไม่มี | ต้องขอ dump หรือ seed |
| Strapi content | ❌ ไม่มี | ต้องขอ export |

---

## คำถามสำหรับ Provider

### Docker & Infrastructure
1. ขอ **Dockerfile** ต้นฉบับที่ build ผ่านให้หน่อย (ทั้ง frontend และ backend)
2. ขอ **docker-compose.yml** ต้นฉบับที่ทำงานได้ให้หน่อย (ทุกตัว)
3. ใช้ **Docker network** แบบไหน? ชื่ออะไร?
4. ลำดับการ start services ที่ถูกต้องคืออะไร?

### Database
5. **Database ใช้อะไร? SQLite หรือ MySQL?**
   - ใน `package.json` มีทั้ง `better-sqlite3` และ `mysql2`
   - ถ้าใช้ SQLite: ไม่ต้องรัน MySQL container
   - ถ้าใช้ MySQL: ต้องมี dump file และ credentials
6. มี **SQL dump** หรือ **migration script** ให้ไหม? (ถ้าใช้ MySQL)
7. มี **SQLite database file** ให้ไหม? (ถ้าใช้ SQLite)
8. **Database credentials** ที่ถูกต้องคืออะไร?
9. ใช้ MySQL version อะไร? (ถ้าใช้ MySQL)

### Strapi Backend
8. มี **.env.example** ที่ครบถ้วนให้ไหม?
9. **STRAPI_API_TOKEN** ที่ frontend ใช้คืออะไร? หรือต้องสร้างเองใน Admin?
10. ค่า **APP_KEYS, JWT_SECRET, API_TOKEN_SALT** ที่ถูกต้องคืออะไร?
11. มีวิธี **import/export content** ใน Strapi ไหม?
12. Strapi ใช้ **port** อะไร?

### Next.js Frontend
13. มี **.env.example** ที่ครบถ้วนให้ไหม?
14. **NEXT_PUBLIC_STRAPI_API_END_POINT** ควรเป็นค่าอะไร?
15. Frontend ต้อง **build ตอน Strapi รันอยู่** ถูกต้องไหม? (เพราะมี getStaticProps)
16. มี **package.json** ที่ dependencies ครบถ้วนไหม? (เช่น react-i18next)

### General
17. มี **README** หรือ **documentation** อธิบาย setup ไหม?
18. Environment ที่ใช้ develop คือ **Windows/Mac/Linux**?
19. มี **CI/CD pipeline** หรือ script สำหรับ deploy ไหม?
