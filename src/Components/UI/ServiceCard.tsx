"use client";

import { cn } from "@/utils/cn";
import { IServiceItem } from "@/interfaces";
import Image from "next/image";

export function ServiceCard({
  item,
}: Readonly<{ item: IServiceItem }>) {
  return (
    <Card className="z-20">
      <CardSkeletonContainer>
        <IconSkeleton item={item} />
      </CardSkeletonContainer>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </Card>
  );
}

const IconSkeleton = ({ item }: Readonly<{ item: IServiceItem }>) => {
  return (
    <div className="overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <IconContainer className="h-8 w-8 circle-1">
          <Image
            src={item.icons[0]}
            alt={`icon-1`}
            width={144}
            height={144}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            className="h-4 w-4 aspect-square"
          />
        </IconContainer>
        <IconContainer className="h-12 w-12 circle-2">
          <Image
            src={item.icons[1]}
            alt={`icon-2`}
            width={144}
            height={144}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            className="h-6 w-6 aspect-square"
          />
        </IconContainer>
        <IconContainer className="circle-3">
          <Image
            src={item.icons[2]}
            alt={`icon-3`}
            width={144}
            height={144}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            className="h-8 w-8 aspect-square"
          />
        </IconContainer>
        <IconContainer className="h-12 w-12 circle-4">
          <Image
            src={item.icons[3]}
            alt={`icon-4`}
            width={144}
            height={144}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            className="h-6 w-6 aspect-square"
          />
        </IconContainer>
        <IconContainer className="h-8 w-8 circle-5">
          <Image
            src={item.icons[4]}
            alt={`icon-5`}
            width={144}
            height={144}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            className="h-4 w-4 aspect-square"
          />
        </IconContainer>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full mx-auto overflow-hidden rounded-[var(--borderRadius)] border border-white/10 bg-[rgba(12,16,26,0.65)] shadow-[0_20px_40px_rgba(4,8,16,0.35)] group hover:translate-y-[-4px] transition duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primaryColor)] py-2 tracking-wide",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm/6 lg:text-base/6 font-normal tracking-wide text-[var(--textColorLight)]",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[var(--borderRadius)] z-40 mb-4",
        className,
        showGradient &&
          "bg-[rgba(15,20,31,0.65)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const IconContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.02)]
    shadow-[0px_0px_12px_rgba(248,248,248,0.2)_inset,0px_20px_30px_rgba(0,0,0,0.35)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
