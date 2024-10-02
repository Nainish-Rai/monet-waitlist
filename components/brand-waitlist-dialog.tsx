"use client";

import { useEffect, useState } from "react";
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
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import { BrandResponse } from "@/model/api-response/brand-response";
import {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { PhoneInput } from "./phone-input";
import toast from "react-hot-toast";
import { LoadingButton } from "./loading-button";

const formSchema = z.object({
  brandName: z
    .string()
    .min(1, "Brand name is required")
    .max(30, "Brand Name can be up to 30 characters only"),
  contactName: z
    .string()
    .min(1, "Contact name is required")
    .max(30, "Contact Person's Name can be up to 30 characters only"),
  contactPhone: z
    .string()
    .refine((val) => val === "" || isValidPhoneNumber(val), {
      message: "Invalid phone number",
    })
    .optional(),
  contactCode: z.string().optional(),
  contactEmail: z.string().email("Invalid email address"),
  brandWebsite: z.string().optional(),
  existingLoyalty: z.string().min(1, "Existing loyalty is required").optional(),
});

type FormData = z.infer<typeof formSchema>;

const BrandWaitlistDialog = ({ text }: { text?: string }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactCode, setContactCode] = useState<string>("");

  const { trackSignUp } = useGoogleAnalytics();

  const onSubmit = async (data: FormData) => {
    const {
      brandName,
      contactEmail,
      brandWebsite,
      existingLoyalty,
      contactName,
    } = data;

    const payload: Partial<FormData> = {
      brandName,
      contactEmail,
      brandWebsite,
      existingLoyalty,
      contactName,
      contactPhone: contactPhone,
      contactCode: contactCode,
    };

    if (contactPhone) {
      const formattedPhone = formatPhoneNumberIntl(contactPhone);
      const [code, ...phoneParts] = formattedPhone.split(" ");
      payload.contactCode = code;
      payload.contactPhone = phoneParts.join("").replace(/[()-]/g, "");
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = (await response.json()) as BrandResponse;

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        trackSignUp("WAITLIST_BRAND", responseData?.contact?.id);
        reset();
      } else {
        toast.error(responseData.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsSubmitted(false);
  };

  useEffect(() => {
    setValue("contactPhone", contactPhone);
    setValue("contactCode", contactCode);
  }, [contactPhone, contactCode, setValue]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant(0.3)}
        >
          <Button
            variant={"primary"}
            className="mt-8 w-36 hover:w-40 px-6 group transition-all  duration-200 text-base text-black rounded-3xl"
            size={"lg"}
          >
            {text ? text : "Join Waitlist"}
            <ArrowUpRightIcon
              height={20}
              width={20}
              className="invisible duration-200 transition-all group-hover:translate-x-1 group-hover:scale-110 group-hover:visible"
            />
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="w-full overflow-scroll lg:overflow-hidden max-h-screen max-w-6xl gap-12 backdrop-blur bg-black/40  flex lg:flex-row flex-col p-12 sm:rounded-3xl">
        <DialogHeader className="flex flex-col max-w-lg">
          <DialogTitle className="text-2xl lg:text-5xl font-light leading-tight">
            {isSubmitted ? "" : "Ready to Transform Loyalty Engagement?"}
          </DialogTitle>
          {!isSubmitted && (
            <p className="text-sm lg:text-base pt-2 leading-normal text-gray-500 mb-4">
              Be the first to offer seamless point conversions and engage
              customers like never before! We&apos;ll reach out soon to discuss
              how Monet can help elevate your brand&apos;s loyalty strategy.
            </p>
          )}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        {isSubmitted ? (
          <ConfirmationForm isBrand onClose={handleClose} />
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
                Contact Person's Name*
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
                Contact Person's E-mail ID*
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
                Contact Person's Phone No.
              </Label>
              <PhoneInput
                id="contactPhone"
                value={contactPhone}
                onChange={(value) => {
                  setContactPhone(value || "");
                  setValue("contactPhone", value || "");
                }}
                onCountryChange={(value) => {
                  setContactCode(value || "");
                  setValue("contactCode", value || "");
                }}
                defaultCountry="IN"
                placeholder="Enter a phone number"
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
                Do have an existing loyalty solution?
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("existingLoyalty", value as "Yes" | "No")
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
            {isSubmitting ? (
              <LoadingButton
                className="w-32 bg-[#FFEE98] font-semibold hover:bg-yellow-400 rounded-full text-black"
                loading
              >
                Submit
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                className="w-32 bg-[#FFEE98] font-semibold hover:bg-yellow-400 rounded-full text-black"
              >
                Submit
              </Button>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export const ConfirmationForm = ({
  onClose,
  isBrand,
}: {
  onClose: () => void;
  isBrand?: boolean;
}) => (
  <div className="text-center flex flex-col pb-6  items-center w-full">
    <Realistic autorun={{ speed: 0.001 }} />
    <div className="w-full lg:max-w-2xl lg:h-96">
      <Image
        src={"congrats.svg"}
        alt="brand logo"
        width={800}
        className="w-full animate-pulse"
        height={800}
      />
    </div>
    <h1 className="text-3xl lg:text-5xl z-10 mt-4 lg:-mt-40  font-medium ">
      Congratulations!
    </h1>
    {!isBrand ? (
      <p className="text-sm lg:text-base  opacity-70 w-full max-w-md mt-3">
        We're excited to have you with us! Keep an eye on your inbox - exciting
        updates and offers are coming your way soon! 🌟
      </p>
    ) : (
      <p className="text-sm lg:text-base  opacity-70 w-full max-w-md mt-3">
        We're thrilled you've joined us to transform customer engagement 🚀 Our
        team will reach out soon to schedule your demo - let's elevate your
        loyalty strategy together! 🌟
      </p>
    )}

    <Button className="mt-4 rounded w-full max-w-24" onClick={onClose}>
      Close
    </Button>
  </div>
);


export default BrandWaitlistDialog;