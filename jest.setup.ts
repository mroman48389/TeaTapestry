/* Lets us use matchers like expect(element).toBeInTheDocument() without importing them in every test files. */
import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from 'util';

/* Jest is running in a Node environment that lacks the TextEncoder web API that React Router relies on, so we need to Polyfill
   TextEncoder in Jest. 
   
   TypeScript type mismatch between Node's TextE/Decoder and the browser's expected TextE/Decoder interface requires casting. */
global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;