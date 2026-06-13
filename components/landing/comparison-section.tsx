"use client";

import { Check, Minus } from "lucide-react";
import {
  comparisonTable,
  type ComparisonCell,
} from "@/lib/peplocked-content";
import { SectionBackdrop } from "@/components/landing/section-backdrop";
import {
  RevealGroup,
  RevealHeader,
  RevealItem,
  RevealTextLine,
  useSectionReveal,
} from "@/components/landing/use-section-reveal";

function ComparisonCellDisplay({
  cell,
  highlight,
}: {
  cell: ComparisonCell;
  highlight: boolean;
}) {
  switch (cell.kind) {
    case "yes":
      return (
        <Check
          className={`mx-auto h-5 w-5 ${highlight ? "text-primary" : "text-muted-foreground"}`}
          strokeWidth={2.5}
        />
      );
    case "no":
      return (
        <Minus
          className="mx-auto h-5 w-5 text-muted-foreground/50"
          strokeWidth={2.5}
        />
      );
    case "partial":
      return (
        <span className={`text-xs ${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
          Partial
        </span>
      );
    case "text":
      return (
        <span className={`text-xs ${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
          {cell.text}
        </span>
      );
    default: {
      const _exhaustive: never = cell;
      return _exhaustive;
    }
  }
}

export function ComparisonSection() {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section ref={ref} className="landing-section relative py-24 lg:py-32 overflow-hidden">
      <SectionBackdrop variant="mesh" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealHeader isVisible={isVisible} className="text-center mb-12">
          <RevealTextLine as="span" staggerIndex={0} className="section-eyebrow justify-center">
            <span className="section-eyebrow-line" />
            Why Peplocked
            <span className="section-eyebrow-line" />
          </RevealTextLine>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight">
            <RevealTextLine staggerIndex={1}>
              Peplocked vs the alternatives.
            </RevealTextLine>
          </h2>
          <RevealTextLine as="p" staggerIndex={2} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            There are other ways to figure out peptides. None of them work like this.
          </RevealTextLine>
        </RevealHeader>

        <RevealGroup isVisible={isVisible}>
          <RevealItem>
            <div className="surface-card reveal-card-surface overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr>
                      <th className="w-1/3 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground" />
                      {comparisonTable.columns.map((column, colIndex) => {
                        const highlight = colIndex === 0;
                        return (
                          <th
                            key={column}
                            className={`px-4 py-4 text-center text-xs font-bold uppercase tracking-wider ${
                              highlight
                                ? "rounded-t-xl border border-b-0 border-primary/25 bg-primary/10 dark:bg-primary/15 text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {column}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, rowIndex) => (
                      <tr key={row.label}>
                        <td className="border-t border-border px-4 py-4 text-left text-sm font-semibold text-foreground">
                          {row.label}
                        </td>
                        {row.cells.map((cell, colIndex) => {
                          const highlight = colIndex === 0;
                          const isLast = rowIndex === comparisonTable.rows.length - 1;
                          return (
                            <td
                              key={`${row.label}-${colIndex}`}
                              className={`px-4 py-4 text-center align-middle ${
                                highlight
                                  ? `border-x border-primary/20 bg-primary/5 dark:bg-primary/10 ${isLast ? "rounded-b-xl border-b border-primary/20" : ""}`
                                  : "border-t border-border"
                              }`}
                            >
                              <ComparisonCellDisplay cell={cell} highlight={highlight} />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
