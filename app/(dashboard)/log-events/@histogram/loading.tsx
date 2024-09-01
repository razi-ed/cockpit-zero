/* ***package imports***  */

/* ***components imports***  */
import { Skeleton } from "@components/atoms/skeleton";
import { Card, CardContent } from "@components/molecules/card";

/* ***libs, utils, custom-hooks imports***  */

/* ***configs imports***  */

/* ***enums, consts imports***  */

/* ***types imports***  */

/* ***local declarations***  */

export default function Loading() {
  /* ***props decustructions***  */

  /* ***data selectors***  */

  /* ***hooks initializations***  */

  /* ***state initializations***  */

  /* ***side effects definitions***  */

  /* ***memoised functions initializations***  */

  /* ***memoised variables initializations***  */

  /* ***internal declarations, if necessary,***  */

  /* ***conditional renderings***  */

  return (
    <Card className="shadow-none h-[173px] w-full">
      <CardContent className="h-full w-full justify-center flex flex-col gap-y-4 pt-6">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </CardContent>
    </Card>
  );
}
