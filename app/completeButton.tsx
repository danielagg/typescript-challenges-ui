"use client";

export const CompleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="w-40 text-black py-2 px-6 rounded flex items-center justify-center space-x-2  cursor-pointer font-medium bg-neutral-400 hover:bg-neutral-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <div>Completed</div>
    </div>
  );
};
