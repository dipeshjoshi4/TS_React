//? 1. Install Dependencies
//- For React Testing Library + Vitest:
// npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
//- If you're using TypeScript, also add:
// npm install --save-dev @types/jest


//?2. Update vite.config.js Add the following test configuration:
// / <reference types="vitest" />gigit
// import {defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom', // required for React components
//     setupFiles: './src/setupTests.js',
//   },
// })

//? 3. Create setupTests.js Inside src/ create a file called setupTests.js and add:
// import '@testing-library/jest-dom';

//? 4. Write Your First Test
// Example: src/App.test.jsx

//? 5. Add Test Script to package.json Add this under scripts:
// "test": "vitest"

//? 6. Run the Tests Run the following command:
// npm run test