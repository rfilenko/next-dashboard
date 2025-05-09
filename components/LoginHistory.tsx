"use client"

import { HistoryIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { LoginHistoryItem } from "@/app/types"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
    tablet: {
        label: "Tablet",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig


interface ChartInfoProps {
    history: LoginHistoryItem[]
}

const LoginHistory = ({ history }: ChartInfoProps) => {
    const sortedHistory = [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const chartData = sortedHistory.map((item) => {
        return {
            date: new Date(item.date).toDateString(),
            desktop: item.device === "desktop" ? 1 : 0,
            mobile: item.device === "mobile" ? 1 : 0,
            tablet: item.device === "tablet" ? 1 : 0,
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Users login history </CardTitle>
                <CardDescription  className="flex items-center gap-2"><HistoryIcon className="h-4 w-4" /> {new Date(sortedHistory[0].date).toDateString()} - {new Date(sortedHistory[sortedHistory.length - 1].date).toDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="desktop"
                            stackId="a"
                            fill="var(--color-desktop)"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="mobile"
                            stackId="b"
                            fill="var(--color-mobile)"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="tablet"
                            stackId="c"
                            fill="var(--color-tablet)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing total visits for a selected period
                </div>
            </CardFooter>
        </Card>
    )
}


export default LoginHistory