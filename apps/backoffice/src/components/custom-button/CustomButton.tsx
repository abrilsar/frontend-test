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
      className={`flex-none rounded-md ${size ? size : 'px-4 py-2.5'} text-sm lg:text-base font-semibold shadow-sm border ${custom ? 'border-buttonColor-100 bg-buttonColor-100 text-white hover:bg-buttonColor-200' : 'border-gray-300 bg-white text-gray-700 hover:text-black hover:bg-gray-50'}`}
    >
      {title}
    </button>
  );
}
