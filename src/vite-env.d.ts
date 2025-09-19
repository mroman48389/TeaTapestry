/* Ambient type declarations that let TypeScript understand Vite-specific globals and tooling. Ensures 
   smooth type-checking and IntelliSense in .ts and .tsx files. Include all type definitions Vite 
   exposes for runtime. Enables support for things like import.meta.env, used by Vite for environment
   variables. */
/// <reference types="vite/client" />