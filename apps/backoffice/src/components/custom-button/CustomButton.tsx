'use client';

interface CustomButtonProps {
  title: string;
  custom: boolean;
  size?: string;
}

export default function CustomButton({
  title,
  custom,
  size,
}: CustomButtonProps) {
  return (
    <button
      type="submit"
      className={`flex-none rounded-md ${size ? size : 'px-4 py-2.5'} text-sm lg:text-base font-semibold shadow-sm border ${custom ? 'border-buttomColor-100 bg-buttomColor-100 text-white hover:bg-buttomColor-200' : 'border-gray-300 text-gray-700 hover:text-black hover:bg-gray-5'}`}
    >
      {title}
    </button>
  );
}
