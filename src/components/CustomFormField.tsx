"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormInputType } from "./forms/PatientForm";
import Image from "next/image";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

interface CustomProps {
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  children?: React.ReactNode;
  renderSkeleton?: (fiedl: any) => React.ReactNode;
  control: Control<any>;
  fieldType: FormInputType;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormInputType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              alt={props.iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            ></Input>
          </FormControl>
        </div>
      );
    case FormInputType.PHONE_INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              alt={props.iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <PhoneInput
              defaultCountry="IN"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              //   value={field.value as E164Number}
              onChange={field.onChange}
              className="input-phone"
            />
          </FormControl>
        </div>
      );

    default:
      break;
  }
};
const CustomFormField: React.FC<CustomProps> = (props) => {
  const { name, label, placeholder, iconSrc, iconAlt, fieldType, control } =
    props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormInputType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
