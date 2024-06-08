import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run front-angular:serve:development',
        production: 'nx run front-angular:serve:production',
      },
      ciWebServerCommand: 'nx run front-angular:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
