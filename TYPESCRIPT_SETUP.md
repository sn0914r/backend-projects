## TypeScript Setup

```bash
npm init -y
```

#### Install runtime dependencies:

```bash
npm install express
```

#### Install TypeScript and dev dependencies:

```bash
npm install -D typescript ts-node-dev @types/node @types/express
```

#### Initialize TypeScript

```bash
npx tsc --init
```

#### Compiler Options

```json
{
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16",
    "target": "ESNext",
    "lib": ["esnext"],
    "types": ["node"],

    "rootDir": "./src",
    "outDir": "./dist",

    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

#### Basic scripts

```json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
}
```
