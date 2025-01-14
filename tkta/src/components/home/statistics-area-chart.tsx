"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HigherEducation } from "@/types/higher-education";

interface Props {
  chartData: HigherEducation[];
  chartConfig: ChartConfig;
  step: number;
}

export function StatisticsAreaChart({ chartData, chartConfig, step }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-textPrimary text-base">
          {chartConfig.value.label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={true}
              dataKey="value"
              domain={[`dataMin - ${step}`, `dataMax + ${step}`]}
              tickCount={4}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={true}
              tickMargin={10}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="value"
              type="monotone"
              fill="transparent"
              fillOpacity={0.4}
              stroke="var(--color-value)"
              stackId="a"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
