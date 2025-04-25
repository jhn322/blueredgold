import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section Skeleton */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0"></div>
        <div className="container relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Skeleton className="h-16 w-3/4 max-w-xl mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mb-8" />
            <div className="flex flex-wrap gap-4 justify-center">
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Latest News Section Skeleton */}
      <section className="px-4 py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <Skeleton className="h-12 w-64 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-xl overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Skeleton className="h-10 w-40 mx-auto" />
          </div>
        </div>
      </section>

      {/* Financial Highlights Skeleton */}
      <section className="px-4 py-20 bg-primary/5">
        <div className="container max-w-6xl mx-auto">
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mb-12" />

          <div className="mb-8">
            <Skeleton className="h-10 w-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Skeleton className="h-40 rounded-xl" />
            <Skeleton className="h-40 rounded-xl" />
            <Skeleton className="h-40 rounded-xl" />
            <Skeleton className="h-40 rounded-xl" />
          </div>

          <Skeleton className="h-80 w-full rounded-xl mb-8" />

          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </section>
    </div>
  );
}
