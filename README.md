## Tecnologias utilizadas
React, Next.js, TailwinCSS, ShadCN, Tanstack Query, Axios, Jest, React Testing Library

Todo se creo de forma tal que se pudiera presentar lo solicitado, lo cual se logro, sin dejar de lado que el desarrollo de este challenge para mi busca mostrar la forma en como se deberia abordar un proyecto, tratando de hacer buen uso del patron modular lo que conlleva una separarción clara de responsabilidades y mejora la mantenibilidad y reusabilidad de componentes y/o metodos/funciones.

### El patrón modular se traduce en organizar lógica por dominio o feature en módulos autocontenidos, que pueden incluir:

   Componentes (components/modules/feature) ✔️
   
   Hook(s) (hooks/useFeature) ✔️
   
   Estado global o local (state-management/store/featureStore) No presente en este challenge por razones de no haber contenido como para necesitarlo y no hacer sobreingenieria.
   
   Servicios o APIs (services/featureService) ✔️
   
   Tipos (types/featureTypes.ts) ✔️
   
   Constantes (constants/featureConstants.ts) ✔️

### Ejemplo de scaffolding con el Patron Modular:

```bash
src/
├── app/                            # Rutas, layouts
├── components/
│   └── modules/
│       └── profile/
│           ├── ProfileInfo.tsx
│           ├── ProfileImage.tsx
│           └── index.ts           # Re-exportador
├── hooks/
│   └── useProfile.ts
├── services/
│   └── profileService.ts
├── state-management/
│   └── store/
│       └── profileStore.ts
├── types/
│   └── profileTypes.ts
├── constants/
│   └── profileConstants.ts
```

### Claves del patrón modular aplicado en React

    Cada feature tiene su "módulo" autocontenido.

    Se mantiene la separación de responsabilidades: UI, lógica, estado y servicios.

    Facilita el escalado del proyecto.

    
### Para empezar

### Primero, instala todos los paquetes
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Luego, corre el server en modo desarrollo:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Al Final, para correr un test

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

Abrir en [http://localhost:3000](http://localhost:3000)

En este Challenge me concentre mucho mas en la architectura de todo y tratar de componetizar y separar todo lo mas que se pueda tratando de darle una 
sola responsabilidad a cada componente, función o hook, siempre tratando de separar lo mejor posible las responsabilidades de cada cosa, zapatero a su zapato.
