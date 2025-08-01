import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <Card className="w-full h-full flex flex-col bg-transparent animate-pulse">
            <div className="h-[16rem] w-full bg-muted rounded-t-xl">
              <Skeleton className="w-full h-full rounded-t-xl" />
            </div>

            <div className="p-6 flex flex-col gap-6 h-2/5">
              <Skeleton className="h-5 w-3/4" />
              
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-20" />
                
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
