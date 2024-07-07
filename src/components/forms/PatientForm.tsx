"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { userFormValidation } from "@/lib/validation";



export enum FormInputType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof userFormValidation>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <section className=" space-y-4">
            {/* <h1 className="header">Hi there 👋</h1> */}
            <p className="text-dark-700">Schedule your first appointment</p>
          </section>
          <CustomFormField
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
            fieldType={FormInputType.INPUT}
            control={form.control}
          />
          <CustomFormField
            name="email"
            label="Email"
            placeholder="john@doe.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
            fieldType={FormInputType.INPUT}
            control={form.control}
          />
          <CustomFormField
            name="phone"
            label="Phone Number"
            placeholder="(555) 1234-5678"
            fieldType={FormInputType.PHONE_INPUT}
            control={form.control}
          />
          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default PatientForm;
