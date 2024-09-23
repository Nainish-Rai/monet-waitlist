"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Define the schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contactPhone: z.string().refine(
    (val) => {
      const regex = /^\+?\d{10,13}$/;
      return regex.test(val);
    },
    { message: "Invalid phone number" }
  ),
  contactEmail: z.string().email("Invalid email address"),
  fromWhere: z
    .enum(["Social Media", "Advertisement", "Friend", "Other"], {
      errorMap: () => ({ message: "Please select a source" }),
    })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export function CustomerWaitlistDialog() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const { name, contactPhone, contactEmail, fromWhere } = data;
    console.log({ name, contactPhone, contactEmail, fromWhere });
    try {
      const response = await fetch("/api/waitlist/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Thank you for joining our waitlist!");
        setOpen(false);
        reset();
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"primary"}
          className="mt-8 text-black rounded-3xl"
          size={"lg"}
        >
          Join the waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-6xl gap-12 backdrop-blur bg-black/10 flex p-12 sm:rounded-3xl">
        <DialogHeader className="flex flex-col max-w-lg">
          <DialogTitle className="text-5xl font-normal leading-tight ">
            Be the First to Unlock Ultimate Rewards
          </DialogTitle>
          <p className="text-base pt-2 leading-normal  text-gray-400 mb-4">
            Join our exclusive waitlist and get early access to seamless point
            conversions, exciting perks, and more. Don&apos;t miss out on the
            next wave of loyalty innovation!
          </p>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-lg w-full"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-right">
              Name*
            </Label>
            <Input id="name" placeholder="Nainish" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone" className="text-right">
              Phone No*
            </Label>
            <Input
              id="contactPhone"
              placeholder="Enter phone no."
              {...register("contactPhone")}
            />
            {errors.contactPhone && (
              <p className="text-sm text-red-500">
                {errors.contactPhone.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactEmail" className="text-right">
              E-mail ID*
            </Label>
            <Input
              id="contactEmail"
              placeholder="Enter email ID"
              {...register("contactEmail")}
            />
            {errors.contactEmail && (
              <p className="text-sm text-red-500">
                {errors.contactEmail.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromWhere" className="text-right">
              How did you hear about us?*
            </Label>
            <Select
              onValueChange={(value) =>
                reset({
                  fromWhere: value as
                    | "Social Media"
                    | "Advertisement"
                    | "Friend"
                    | "Other",
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Friend">Friend</SelectItem>
                <SelectItem value="Advertisement">Advertisement</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.fromWhere && (
              <p className="text-sm text-red-500">{errors.fromWhere.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-32  bg-[#FFEE98] font-semibold  hover:bg-yellow-400 rounded-full  text-black"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
