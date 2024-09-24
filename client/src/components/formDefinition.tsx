import Footer from "./Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import SelectMajor from "./ui/selectMajor";
import { useState } from "react";
import PopoverInterests from "./ui/PopoverInterests";
import Confetti from "react-confetti";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine(
      (val) => {
        return val.endsWith("@oregonstate.edu");
      },
      {
        message: "Email must end with @oregonstate.edu",
      }
    ),
  major: z.string().min(1, {
    message: "Major must be input",
  }),
  interests: z.array(z.string()).min(1, {
    message: "Must select at least 1 interest",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      major: "",
      interests: [],
    },
  });

  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(
      "https://script.google.com/macros/s/AKfycbwBo9YZMbZhpVy4ljZlPB6v6nJTmlgObmuTv0Tel0mR62WFM7Vg0-CLx2NuToVTM2NgYw/exec",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Optional: Open Instagram link after submission
  }

  return submitted ? (
    <div className="z-50 text-center text-orange-500">
      <div>Thank you for submitting! 🧡🦫</div>
      <Confetti numberOfPieces={50} />
      <Footer />
    </div>
  ) : (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log("Validation errors:", errors);
          })}
          className="bg-zinc-800 p-6 lg:p-16 rounded-lg w-[80%] mx-auto text-orange-500 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>Your first & last name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>Your OSU email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major</FormLabel>
                <FormControl>
                  <SelectMajor
                    value={field.value}
                    onChange={(value: any) => {
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Your declared or intended major
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interests</FormLabel>
                <FormControl>
                  <PopoverInterests
                    value={field.value}
                    onChange={(value: any) => {
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Events or meetings you're interested in when signing up for
                  ACM
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Footer />
    </>
  );
}
