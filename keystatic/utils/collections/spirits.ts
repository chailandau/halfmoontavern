import { collection } from '@keystatic/core';

import { slug } from 'keystatic/utils/fields/slug';

export const spiritsConfig = {
  spirits: collection({
    label: 'Spirits',
    slugField: 'name',
    path: 'keystatic/spirits/*',
    format: { data: 'json' },
    columns: ['name'],
    schema: {
      ...slug,
    },
  }),
};
