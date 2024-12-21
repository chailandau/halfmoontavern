import { collection, fields } from '@keystatic/core';

import { description } from 'keystatic/utils/fields/description';
import { publishDate } from 'keystatic/utils/fields/publishDate';
import { slug } from 'keystatic/utils/fields/slug';
import { createFieldArray } from 'keystatic/utils/functions';

export const drinksConfig = {
  drinks: collection({
    label: 'Drinks',
    slugField: 'name',
    path: 'keystatic/drinks/*',
    format: { data: 'json' },
    columns: ['name', 'spirit', 'publishedDate'],
    schema: {
      ...slug,
      spirit: fields.relationship({
        label: 'Spirit',
        collection: 'spirits',
        validation: { isRequired: true },
      }),
      ...description,

      ingredients: createFieldArray({
        label: 'Ingredient',
        required: true,
      }),
      instructions: createFieldArray({
        label: 'Step',
        multiline: true,
      }),
      optional: createFieldArray({
        label: 'Optional step',
        multiline: true,
      }),
      ...publishDate,
    },
  }),
};
