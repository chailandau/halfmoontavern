import { fields } from '@keystatic/core';

export const publishDate = {
  publishedDate: fields.datetime({
    label: 'Published date',
    defaultValue: { kind: 'now' },
  }),
};
