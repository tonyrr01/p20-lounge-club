import { Card } from "@/components/ui/card";
import { products } from "@/features/admin/demo-data";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">Stock, costo y reposicion</p>
        <h1 className="mt-2 text-3xl font-semibold">Inventario</h1>
      </div>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-marble/55">
              <tr>
                <th className="py-3">Producto</th>
                <th>Categoria</th>
                <th>Stock</th>
                <th>Minimo</th>
                <th>Precio</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name} className="border-t border-white/10">
                  <td className="py-4 font-medium">{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>{product.min}</td>
                  <td>{product.price}</td>
                  <td className={product.stock <= product.min * 2 ? "text-champagne" : "text-emerald-300"}>
                    {product.stock <= product.min * 2 ? "Revisar" : "OK"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
