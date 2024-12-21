import { config, fields } from '@keystatic/core';

import { drinksConfig } from 'keystatic/utils/collections/drinks';
import { spiritsConfig } from 'keystatic/utils/collections/spirits';
import { settingsConfig } from 'keystatic/utils/singletons/settings';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    // TODO: update to cloud / github when ready
    kind: 'local',
  },
  collections: {
    ...drinksConfig,
    ...spiritsConfig,
  },
  singletons: {
    ...settingsConfig,
  },
});
