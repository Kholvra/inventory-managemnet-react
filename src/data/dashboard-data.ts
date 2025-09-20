import {
  cancel,
  cost,
  numberOfCategories,
  numberOfSupplier,
  profit,
  purchase,
  returnIcon,
  revenue,
  sales,
  quantitiyInHand,
  toBeReceived,
} from "../assets/index";
import type { dashboardComponentType } from "../types/index";

export const dashboardData:dashboardComponentType[] = [
  {
    id: "sales",
    title: "Sales Overview",
    grid: {
      rows: 1,
      cols: 4,
    },
    componentType: "STATS_CARD",
    stats: [
      {
        label: "Sales",
        value: 832,
        currency: "$",
        icon: sales,
      },
      {
        label: "Revenue",
        value: 18300,
        currency: "$",
        icon: revenue,
      },
      {
        label: "Profit",
        value: 868,
        currency: "$",
        icon: profit,
      },
      {
        label: "Cost",
        value: 17432,
        currency: "$",
        icon: cost,
      },
    ],
  },
  {
    id: "inventory",
    title: "Inventory Summary",
    grid: {
      rows: 1,
      cols: 2,
    },
    componentType: "STATS_CARD",
    stats: [
      {
        label: "Quantity In Hand",
        value: 868,
        icon: quantitiyInHand,
        inColumn: true,
      },
      {
        label: "To Be Received",
        value: 200,
        icon: toBeReceived,
        inColumn: true,
      },
    ],
  },
  {
    id: "purchase",
    title: "Purchase Overview",
    grid: {
      rows: 1,
      cols: 4,
    },
    componentType: "STATS_CARD",
    stats: [
      {
        label: "Purchase",
        value: 82,
        icon: purchase,
      },
      {
        label: "Cost",
        value: 13573,
        currency: "$",
        icon: cost,
      },
      {
        label: "Cancel",
        value: 5,
        icon: cancel,
      },
      {
        label: "Return",
        value: 17432,
        currency: "$",
        icon: returnIcon,
      },
    ],
  },
  {
    id: "product",
    title: "Product Summary",
    grid: {
      rows: 1,
      cols: 2,
    },
    componentType: "STATS_CARD",
    stats: [
      {
        label: "Number Of Suppliers",
        value: 31,
        icon: numberOfSupplier,
        inColumn: true,
      },
      {
        label: "Number Of Categories",
        value: 21,
        icon: numberOfCategories,
        inColumn: true,
      },
    ],
  },
];