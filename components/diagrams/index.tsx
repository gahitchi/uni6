import { LOCDiagram } from "./LOCDiagram";
import { IFPUGFlow } from "./IFPUGFlow";
import { UFPBreakdown } from "./UFPBreakdown";
import { TransactionMap } from "./TransactionMap";
import { GSCWheel } from "./GSCWheel";
import { BackfiringFlow } from "./BackfiringFlow";
import { EstimateUncertainty } from "./EstimateUncertainty";
import { BoehmTaxonomy } from "./BoehmTaxonomy";
import { RayleighNorden } from "./RayleighNorden";
import { ProductPyramid } from "./ProductPyramid";
import { McCallTree } from "./McCallTree";
import { FactorMatrix } from "./FactorMatrix";
import { ISO9126Tree } from "./ISO9126Tree";
import { QualityInUse } from "./QualityInUse";

const registry: Record<string, () => React.ReactElement> = {
  LOCDiagram,
  IFPUGFlow,
  UFPBreakdown,
  TransactionMap,
  GSCWheel,
  BackfiringFlow,
  EstimateUncertainty,
  BoehmTaxonomy,
  RayleighNorden,
  ProductPyramid,
  McCallTree,
  FactorMatrix,
  ISO9126Tree,
  QualityInUse,
};

export function Diagram({ name }: { name: string }) {
  const Component = registry[name];
  if (!Component) {
    return (
      <div className="rounded-xl border border-dashed border-ink-200 bg-ink-50 p-6 text-center text-sm text-ink-500">
        Diagramma non disponibile: <code className="font-mono">{name}</code>
      </div>
    );
  }
  return <Component />;
}
