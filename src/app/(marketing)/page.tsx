import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>
          Baledev is now public!
        </p>
      </div>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Next.js app with{' '}
        <span className='text-indigo-600'>Laravel Sanctum</span>{' '}
        as a backend.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        Laravel breeze next.js with typescript using sanctum package boilerplate.
      </p>

      <Link
        className={buttonVariants({
          size: 'lg',
          className: 'mt-5',
        })}
        href='/dashboard'
        target='_blank'>
        Get started{' '}
        <ArrowRight className='ml-2 h-5 w-5' />
      </Link>
    </MaxWidthWrapper>
  );
}
