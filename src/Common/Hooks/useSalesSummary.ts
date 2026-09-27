"use client";
import { useState } from "react";

export type SalesPeriod = "Día" | "Semana" | "Mes";
export function useSalesSummary() { return useState<SalesPeriod>("Día"); }
