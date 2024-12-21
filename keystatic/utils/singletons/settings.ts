import { fields, singleton } from '@keystatic/core';

export const settingsConfig = {
  settings: singleton({
    label: 'Settings',
    schema: {
      spiritOrder: fields.multiRelationship({
        label: 'Spirit Order',
        collection: 'spirits',
      }),
    },
  }),
};
