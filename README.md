# Music Streaming app
- Allows uploading and playing of sound files
- Current tech stack:
    - Express
    - Node
    - MongoDB
    - Mongoose

#### Tasks:

- [ ] Switch to this suggested tech stack:

| Layer | Suggested Tech | Why |
|-------|----------------|-----|
| API & Orchestration | Node.js + Express	| Fast dev, huge ecosystem, easy frontend integration |
| Streaming Server | Go (Gin, Fiber) or Rust (Actix) | Handles millions of concurrent connections efficiently |
| Background Processing	| Python + Celery | Audio processing, ML, recommendation systems |
| Frontend | React / React Native | Modern UI for web and mobile |
| Storage / CDN | S3 + CloudFront | Scales streaming delivery globally |
| DB / Cache | PostgreSQL + Redis | Relational + caching for fast responses |
| Testing: |
| Unit | Jest, Pytest, built-in Go/Rust |
| Integration | Supertest, Pytest |
| E2E | Playwright |
| Load/concurrency | Locust/k6 |     
---
- [ ] Develop basic frontend
    - Login Page
    - Home Page
    - Upload Page
