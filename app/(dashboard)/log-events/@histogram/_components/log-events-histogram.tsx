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
  UNSPECIFIED: {
    label: "Event Count",
    color: "hsl(var(--chart-1))",
  },

  FATAL: {
    label: "FATAL Count",
    color: "hsl(var(--chart-7))",
  },
  ERROR: {
    label: "ERROR Count",
    color: "hsl(var(--chart-3))",
  },
  WARN: {
    label: "WARN Count",
    color: "hsl(var(--chart-6))",
  },
  INFO: {
    label: "INFO Count",
    color: "hsl(var(--chart-5))",
  },
  DEBUG: {
    label: "DEBUG Count",
    color: "hsl(var(--chart-2))",
  },
  TRACE: {
    label: "TRACE Count",
    color: "hsl(var(--chart-4))",
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
            // content={
            //   <ChartTooltipContent className="w-[150px]" nameKey="longDate" />
            // }
            />
            <Bar dataKey={"FATAL"} fill={chartConfig.FATAL.color} stackId="a" />
            <Bar dataKey={"ERROR"} fill={chartConfig.ERROR.color} stackId="a" />
            <Bar dataKey={"WARN"} fill={chartConfig.WARN.color} stackId="a" />
            <Bar dataKey={"INFO"} fill={chartConfig.INFO.color} stackId="a" />
            <Bar dataKey={"DEBUG"} fill={chartConfig.DEBUG.color} stackId="a" />
            <Bar dataKey={"TRACE"} fill={chartConfig.TRACE.color} stackId="a" />
            <Bar
              dataKey={"UNSPECIFIED"}
              fill={chartConfig.UNSPECIFIED.color}
              stackId="a"
            />
          </BarChartComponent>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
