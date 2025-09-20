export type CardStatType = {
  label: string;
  value: number;
  currency?: string;
  icon: string;
  inColumn?: boolean;
};

type DataSets = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type dashboardBaseType = {
  id: string;
  title: string;
  grid: {
    rows: number;
    cols: number;
  };
};

type StatsCard ={
  componentType: "STATS_CARD";
  stats: CardStatType[];
};

type BarChart = {
  componentType: "BAR_CHART";
  stats: DataSets[];
};

export type DataType = StatsCard | BarChart;

export type dashboardComponentType = dashboardBaseType & StatsCard | dashboardBaseType& BarChart;
