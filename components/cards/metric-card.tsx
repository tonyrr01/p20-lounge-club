import { Card } from "@/components/ui/card";

export function MetricCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="shadow-none">
      <p className="text-sm text-marble/60">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-marble">{value}</p>
      <p className="mt-2 text-sm text-champagne/80">{detail}</p>
    </Card>
  );
}
