import { Field, FormikProps } from "formik";
import * as React from "react";
import * as moment from "moment";

export const DateTimeAsStringField = ({
  name,
  format
}: {
  name: string;
  format?: string;
}) => (
  <Field name={name}>
    {({ field: { value }, form }: { field: any; form: FormikProps<any> }) =>
      moment
        .utc(value)
        .local()
        .format(format)
    }
  </Field>
);
