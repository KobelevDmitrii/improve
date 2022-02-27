# improve

### Project functions:
- Monitoring the progress of students: student, class
- Timetable (both for teachers and students)
- Blog;
- Library
- Achievements of students
- Achievements of teacher
- Parents` contact list
- School event schedule
- Educational games (a teacher can choose a template and adapt it according with a topic of a lesson)
- Creation of a school project (students can choose topic, gather a team, communicate and upload files)

### Tech stack:
- Figma
- React
- CSS
- HTML
- JavaScript
- JSX
- PostgresSQL
- Node.js
### Startup Environment
1. Install docker
2. Install docker-compose
3. Fill parameters of `.env` file in project root directory:

```
API_PORT=5000
CLIENT_PORT=3000

DATABASE_URL=

POSTGRES_DB=
POSTGRES_PORT=5432
POSTGRES_USER=
POSTGRES_PASSWORD=

TOKEN_KEY=
```
### Startup
```console
docker-compose up --build
```
