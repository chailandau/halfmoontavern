import { fields } from '@keystatic/core';

export const description = {
  description: fields.text({
    label: 'Description',
    multiline: true,
  }),
};
