# Shabllon projekti – Sistemi Universitar

Shabllon për projektet e lëndës **Zhvillimi i Avancuar i Ueb dhe Shërbimeve të Ueb**.
Fokusi: arkitektura, routes (me lazy loading) dhe një rrjedhë end-to-end (frontend ↔ backend).

| Pjesa    | Teknologjia                                  |
|----------|----------------------------------------------|
| frontend | Angular 17 (standalone), PrimeNG 17, PrimeFlex 3, PrimeIcons |
| backend  | Node.js + Express                            |

## Nisja

Kërkohet Node.js 18.13+ (rekomandohet 20).

```bash
# Terminali 1 – backend (http://localhost:3000)
cd backend
npm install
npm start

# Terminali 2 – frontend (http://localhost:4200)
cd frontend
npm install
npm start
```

`npm start` në frontend përdor `proxy.conf.json`, kështu që çdo kërkesë `/api/...` dërgohet te backend-i.

## Struktura

```
backend/
├── server.js                      # pika hyrëse
└── src/
    ├── app.js                     # konfigurimi i Express, regjistrimi i routes
    ├── routes/student.routes.js   # URL -> metodë e controller-it
    ├── controllers/               # merr kërkesën, validon, kthen përgjigjen
    ├── services/                  # logjika e të dhënave (tani në memorie)
    ├── models/                    # modelet e entiteteve
    └── middleware/errorHandler.js

frontend/src/app/
├── app.config.ts                  # providers (router, http, animations)
├── app.routes.ts                  # routes kryesore me lazy loading
├── core/
│   ├── models/                    # student, lenda, profesor
│   └── services/student.service.ts
├── layout/                        # navbar, footer
├── shared/not-found/              # faqja 404
└── features/
    ├── home/
    ├── studentet/                 # FUNKSIONAL: list, form, detail + studentet.routes.ts
    ├── lendet/                    # bosh: list, form + lendet.routes.ts
    └── profesoret/                # bosh: list, detail + profesoret.routes.ts
```

Çdo komponent ka `.ts`, `.html` dhe `.scss`.

## Routes

### Frontend

| Route              | Komponenti               | Statusi     |
|--------------------|--------------------------|-------------|
| `/home`            | HomeComponent            | ✅          |
| `/studentet`       | StudentListComponent     | ✅ GET, DELETE |
| `/studentet/shto`  | StudentFormComponent     | ✅ POST     |
| `/studentet/:id`   | StudentDetailComponent   | ✅ GET by id |
| `/lendet`          | LendaListComponent       | ⬜ bosh     |
| `/lendet/shto`     | LendaFormComponent       | ⬜ bosh     |
| `/profesoret`      | ProfesorListComponent    | ⬜ bosh     |
| `/profesoret/:id`  | ProfesorDetailComponent  | ⬜ bosh     |
| `**`               | NotFoundComponent        | ✅          |

### Backend

| Metoda | Endpoint               | Përshkrimi        |
|--------|------------------------|-------------------|
| GET    | `/api/studentet`       | lista             |
| GET    | `/api/studentet/:id`   | një student       |
| POST   | `/api/studentet`       | shto (`emri`, `mbiemri`, `email`) |
| DELETE | `/api/studentet/:id`   | fshi              |

> Të dhënat ruhen në memorie — rifillimi i serverit i kthen në gjendjen fillestare.

## Rrjedha end-to-end (shembull: shto student)

```
StudentFormComponent  ->  StudentService.create()  ->  POST /api/studentet
   -> student.routes.js -> student.controller.create -> student.service.create
   <- 201 { id, emri, mbiemri, email }  <- navigim te /studentet
```

## Detyra për studentët

1. Ndiqni modelin e **Studentët** për **Lëndët** dhe **Profesorët**:
   - backend: `model` → `service` → `controller` → `routes` → regjistrim në `app.js`
   - frontend: `service` në `core/services`, pastaj plotësoni komponentet ekzistuese
2. Shtoni **PUT** (përditësim) për të paktën një entitet.
