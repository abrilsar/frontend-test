'use client';

interface TitlesProps {
  title: string;
  text: string;
  subtitle?: string;
  customFirst?: boolean;
}
export default function Title({
  title,
  text,
  subtitle,
  customFirst,
}: TitlesProps) {
  return (
    <div className="mx-auto max-w-8xl">
      <div className="flex flex-col items-center mx-auto max-w-3xl text-center">
        <div>
          {subtitle && (
            <span className="inline-flex items-center justify-center rounded-full bg-subtitleColor-100 px-2 py-0.5 lg:px-2.5 lg:py-[1.5px] mb-4 text-sm font-medium text-secondaryColor border border-subtitleColor-200">
              {subtitle}
            </span>
          )}
          <h2 className="text-[28px] xl font-semibold tracking-tight text-gray-900 sm:text-[33px] lg:text-[36px]">
            {title}
          </h2>
        </div>
        <p className="mt-5 text-lg sm:text-lg lg:text-xl leading-8 text-gray-600 font-[370]">
          {text}
        </p>
      </div>
    </div>
  );
}
