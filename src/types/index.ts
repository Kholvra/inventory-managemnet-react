import type { CardStatType } from "../Components/MainContent/CardStat";




type dashboardBaseType ={
      id: string;
      title: string;
      grid: {
        rows: number;
        cols: number;
      };
      
    };

type StatsCard = dashboardBaseType & {
    componentType:"STATS_CARD";
    stats: CardStatType[];
}

type BarChart = dashboardBaseType &{
    componentType:"BAR_CHART";
    data: string
}

export type dashboardComponentType =  StatsCard | BarChart
