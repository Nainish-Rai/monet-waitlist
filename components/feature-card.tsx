import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({
  imageSrc,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="flex flex-wrap gap-6 bg-transparent border-none shadow-none">
      <CardHeader className="p-0">
        <Image
          src={imageSrc}
          alt=""
          width={50}
          height={50}
          className="object-contain shrink-0 self-start aspect-square"
        />
      </CardHeader>
      <CardContent className="flex flex-col grow shrink-0 basis-0 w-fit p-0 sm:max-w-full">
        <CardTitle className="text-lg lg:text-3xl font-medium text-white sm:max-w-full">
          {title}
        </CardTitle>
        <p className="mt-3 text-sm lg:text-base text-zinc-500 sm:max-w-full">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
