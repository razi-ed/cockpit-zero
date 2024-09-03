import { Skeleton } from "@components/atoms/skeleton";
import { Card, CardContent } from "@components/molecules/card";

export default function Loading() {
  return (
    <Card className="shadow-none h-[525px] w-full">
      <CardContent className="h-full w-full flex flex-col gap-y-4 pt-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </CardContent>
    </Card>
  );
}
