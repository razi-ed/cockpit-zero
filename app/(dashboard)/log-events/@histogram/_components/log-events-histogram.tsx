"use client";

/* ***package imports***  */
import {
  Bar,
  BarChart as BarChartComponent,
  CartesianGrid,
  XAxis,
} from "recharts";

/* ***components imports***  */
import { Card, CardContent } from "@components/molecules/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/organisms/chart";

/* ***libs, utils, custom-hooks imports***  */

/* ***configs imports***  */

/* ***enums, consts imports***  */

/* ***types imports***  */

import { IGroupedLogEventHistogramEntry } from "@dashboard/dashboard.definitions";

/* ***local declarations***  */
const chartConfig = {
  longDate: {
    label: "Event Date",
  },
  logCount: {
    label: "Event Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface ILogEventsHistogramProps {
  histogramData?: IGroupedLogEventHistogramEntry[];
}

export function LogEventsHistogram({
  histogramData,
}: ILogEventsHistogramProps) {
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
    <Card className="shadow-none">
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[125px] w-full"
        >
          <BarChartComponent
            accessibilityLayer
            data={histogramData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="shortDate"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="w-[150px]" nameKey="logCount" />
              }
            />
            <Bar dataKey={"logCount"} fill={"var(--color-logCount)"} />
          </BarChartComponent>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
