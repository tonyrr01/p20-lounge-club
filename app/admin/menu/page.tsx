import { Card } from "@/components/ui/card";
import { products } from "@/features/admin/demo-data";

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">Catalogo visible para clientes</p>
        <h1 className="mt-2 text-3xl font-semibold">Menu</h1>
      </div>
      <Card>
        <div className="grid gap-3">
          {products.map((product) => (
            <div key={product.name} className="grid gap-2 rounded-md border border-white/10 p-4 md:grid-cols-[1fr_140px_120px]">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-marble/60">{product.category}</p>
              </div>
              <span className="text-sm text-marble/65">Stock {product.stock}</span>
              <span className="font-semibold text-champagne">{product.price}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
