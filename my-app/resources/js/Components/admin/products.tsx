import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

import { EditProduct } from "@/Components/admin/edit-product";
import { NewProduct } from "@/Components/admin/new-product";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  image: string;
  model: string;
  product: string;
  quantity: number;
  price: number;
  description: string;
}

export function Products() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios.get("https://api.github.com/users/jeanxpereira")
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(user);

  const Price = 10;

  const handleEditClick = (_product: Product) => {
    // Implement edit functionality here
  };

  const products: Product[] = [
    {
      id: 23,
      image: "./src/assets/batteries/energizer.png",
      model: "Pilha Energizer",
      product: "Pilha",
      quantity: 25,
      price: Price,
      description: "Descrição do produto...",
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do produto"></Input>
          <Input name="model" placeholder="Modelo"></Input>
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>
        <NewProduct />
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Imagem</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <img src={product.image} width={96} alt={`${product.model}`} />
                </TableCell>
                <TableCell>{product.model}</TableCell>
                <TableCell>{product.product}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(product.price)}
                </TableCell>
                <TableCell>
                  <EditProduct product={product} onEdit={() => handleEditClick(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
