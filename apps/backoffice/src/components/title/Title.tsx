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
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div>
          {subtitle && (
            <span className="inline-flex items-center justify-center rounded-full bg-subtitleColor-100 px-2 py-0.5 mb-4 text-sm font-medium text-secondaryColor border border-subtitleColor-200">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[33px]">
            {title}
          </h2>
        </div>
        <p className="mt-5 text-lg leading-8 text-gray-600">{text}</p>
      </div>
    </div>
  );
}
