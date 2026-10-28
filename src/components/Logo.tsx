import { site } from "@/lib/site";

// Replace with your own logo (e.g. <Image src="/logo.svg" ... />) when you have one.
export default function Logo() {
  return (
    <span className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
      <span className="bg-gradient-brand flex h-8 w-8 items-center justify-center rounded-lg">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-white" aria-hidden="true">
          <path d="M6 4l14 8-14 8z" />
        </svg>
      </span>
      {site.name}
    </span>
  );
}
