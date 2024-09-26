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
import { Label } from "@/components/ui/label";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import { PartyPopper } from "lucide-react";

// Define the schema using zod
const formSchema = z.object({
  brandName: z.string().min(1, "Brand name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // Allow empty phone number
        const regex = /^\+?\d{10,13}$/;
        return regex.test(val);
      },
      { message: "Invalid phone number" }
    ),
  brandWebsite: z.string().optional(),
  existingLoyalty: z.string().min(1, "Existing loyalty is required"),
});

type FormData = z.infer<typeof formSchema>;

export function BrandContactDialog() {
  const [open, setOpen] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const {
      brandName,
      contactName,
      contactEmail,
      contactPhone,
      brandWebsite,
      existingLoyalty,
    } = data;
    console.log({
      brandName,
      contactName,
      contactEmail,
      contactPhone,
      brandWebsite,
      existingLoyalty,
    });

    try {
      const response = await fetch("/api/waitlist/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // alert("Brand contact saved successfully!");
        setIsSubmitted(true);

        // setOpen(false);
        reset();
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.2)}
        >
          <Button
            variant={"primary"}
            className="mt-8 text-black rounded-3xl"
            size={"lg"}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="w-full overflow-scroll lg:overflow-hidden max-h-screen max-w-6xl gap-12 backdrop-blur bg-black/40 flex lg:flex-row flex-col p-12 sm:rounded-3xl">
        <DialogHeader className="flex flex-col max-w-lg">
          <DialogTitle className=" text-2xl lg:text-5xl font-light leading-tight ">
            {isSubmitted
              ? "Thank you for joining!"
              : " Ready to Transform Loyalty Engagement?"}
          </DialogTitle>
          <p className="text-sm lg:text-base pt-2 leading-normal text-gray-500 mb-4">
            Be the first to offer seamless point conversions and engage
            customers like never before! We&apos;ll reach out soon to discuss
            how Monet can help elevate your brand&apso;s loyalty strategy.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        {isSubmitted ? (
          <ConfirmationForm onClose={handleClose} />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-lg w-full"
          >
            <div className="space-y-2">
              <Label htmlFor="brandName" className="text-right">
                Brand Name*
              </Label>
              <Input
                id="brandName"
                placeholder="Brand Name"
                {...register("brandName")}
              />
              {errors.brandName && (
                <p className="text-sm text-red-500">
                  {errors.brandName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-right">
                Contact Person’s Name*
              </Label>
              <Input
                id="contactName"
                placeholder="Contact Name"
                {...register("contactName")}
              />
              {errors.contactName && (
                <p className="text-sm text-red-500">
                  {errors.contactName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-right">
                Contact Person’s E-mail ID*
              </Label>
              <Input
                id="contactEmail"
                placeholder="Contact Email"
                {...register("contactEmail")}
              />
              {errors.contactEmail && (
                <p className="text-sm text-red-500">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="text-right">
                Contact Person’s Phone no.
              </Label>
              <Input
                id="contactPhone"
                placeholder="Contact Phone"
                {...register("contactPhone")}
              />
              {errors.contactPhone && (
                <p className="text-sm text-red-500">
                  {errors.contactPhone.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="brandWebsite" className="text-right">
                Brand Website URL
              </Label>
              <Input
                id="brandWebsite"
                placeholder="Brand Website"
                {...register("brandWebsite")}
              />
              {errors.brandWebsite && (
                <p className="text-sm text-red-500">
                  {errors.brandWebsite.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="existingLoyalty" className="text-right">
                Do have an existing loyalty solution?*
              </Label>
              <Select
                onValueChange={(value) =>
                  reset({
                    existingLoyalty: value as "Yes" | "No",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              {errors.existingLoyalty && (
                <p className="text-sm text-red-500">
                  {errors.existingLoyalty.message}
                </p>
              )}
            </div>
            <Button
              // type="submit"
              onClick={() => setIsSubmitted(true)}
              className="w-32 bg-[#FFEE98] font-semibold hover:bg-yellow-400 rounded-full text-black"
            >
              Submit
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export const ConfirmationForm = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center space-y-4">
    <Realistic autorun={{ speed: 0.001 }} />
    <PartyPopper className="w-16 h-16 mx-auto text-green-500 animate-bounce" />
    <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
    <p className="text-gray-600">
      Your message has been successfully sent. We&apos;ll get back to you soon!
    </p>
    <Button onClick={onClose} className="w-full">
      Close
    </Button>
  </div>
);
