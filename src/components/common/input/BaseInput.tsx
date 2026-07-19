import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type BaseInputProps =
  | ({
      as?: "input";
      label: string;
    } & InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
      label: string;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>);

export default function BaseInput(props: BaseInputProps) {
  const { label, as = "input", ...rest } = props;

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      {as === "textarea" ? (
        <Textarea {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <Input {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </Field>
  );
}