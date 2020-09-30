export const createTsconfig = () => {
  return `{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "declaration": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src/",
    "outDir": "./dist",
    "sourceMap": true,
    "noUnusedLocals": true,
    "lib": ["es2018", "DOM", "DOM.Iterable", "esnext.asynciterable"],
    "paths": {
      "*": [
        "*"
      ]
    },
    "plugins": [
      {
        "transform": "@zerollup/ts-transform-paths"
      }
    ]
  },
  "include": [
    "./**/*"
  ],
  "exclude": [
    "./**/node_modules",
    "./**/support"
  ]
}
`;
};
