import { fields } from '@keystatic/core';

export const slug = {
  name: fields.slug({
    name: { label: 'Name', validation: { isRequired: true } },
  }),
};
