import { fields, singleton } from '@keystatic/core';

export const settingsConfig = {
  settings: singleton({
    label: 'Settings',
    path: 'keystatic/settings',
    schema: {
      spiritOrder: fields.multiRelationship({
        label: 'Spirit Order',
        collection: 'spirits',
      }),
    },
  }),
};
