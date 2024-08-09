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
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormInputType } from "./PatientForm";

type Props = {
  user: User;
};
const RegisterForm: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userFormValidation>) {
    const { name, email, phone } = values;
    setLoading(true);
    try {
      const userData = {
        name,
        email,
        phone,
      };
      const user = await createUser(userData);
      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }
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
          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
