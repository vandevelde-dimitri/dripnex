## 📁 Structure du Projet

```
src/
├── core/               # Logique métier
│ ├── domain/           # Entités et interfaces
│ │ ├── entities/       # Ex: User.ts
│ │ └── repositories/   # Ex: IUserRepository.ts
│ └── use-cases/        # Logique applicative (Ex: LoginUser.ts)
├── infrastructure/     # Implémentations concrètes
│ ├── adapters/         # Ex: AxiosAdapter.ts, PrismaAdapter.ts
│ └── repositories/     # Ex: ApiUserRepository.ts
└── presentation/       # Next.js
├── components/         # Composants UI
├── hooks/              # Hooks pour lier Use Cases et UI
└── app/                # App Router


```
