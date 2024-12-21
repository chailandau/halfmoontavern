import { fields } from '@keystatic/core';

interface FieldArray {
  label: string;
  plural?: string;
  multiline?: boolean;
  required?: boolean;
}

export const createFieldArray = ({ label, plural, multiline = false, required = false }: FieldArray) =>
  fields.array(
    fields.text({
      label,
      multiline,
      validation: { isRequired: true },
    }),
    {
      label: plural ?? `${label}s`,
      itemLabel: (props) => props.value,
      validation: { length: { min: required ? 1 : 0 } },
    }
  );
