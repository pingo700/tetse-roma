import React, { useState } from 'react';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ShoppingBagOpen } from "@phosphor-icons/react";
import { toast } from "sonner";
import { QuantityInput } from './quantity-input';

interface ItemProps {
  BrandLogo: React.ComponentType<{ className?: string }> | string;
  BatteryImg: string;
  Id: string;
  Price: number;
}

const ItemComponent: React.FC<ItemProps> = ({ BrandLogo, BatteryImg, Id, Price }) => {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handlePurchase = () => {
    if (selectedModel === "") {
      return;
    } else {
      console.log(selectedModel);
      console.log(quantity);
      toast.success(`×${quantity} ${Id} adicionado ao carrinho!`, {
        description: `Modelo ${selectedModel}`,
        action: {
          label: "Desfazer",
          onClick: () => console.log("desfazer"),
        },
      });
    }
  };

  {Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL' // Change this
    }).format(Price)}

  return (
    <div id="item" className="border border-1 rounded-2xl sm:h-50 flex sm:flex-row flex-col justify-between items-center p-3 sm:w-3/4"> {/* flex-col h-[20rem] w-[20rem] items-center p-3 */}
      <div className="flex flex-col gap-4 items-center p-3 ">
        {typeof BrandLogo === 'string' ? (
          <img src={BrandLogo} alt="Brand Logo" className="w-40 fill-gray-50" />
        ) : (
          <BrandLogo className="fill-gray-50 pb-2"/>
        )}
        <img src={BatteryImg} alt="Battery" className="w-[120px]" />
      </div>
      <div className="flex items-center gap-4 justify-end flex-col sm:flex-row">
        <Select onValueChange={(value: string) => setSelectedModel(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o modelo" />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto max-h-[10rem]">
            <SelectItem value="315">315</SelectItem>
            <SelectItem value="317">317</SelectItem>
            <SelectItem value="319">319</SelectItem>
            <SelectItem value="321">321</SelectItem>
          </SelectContent>
        </Select>
        <div className='flex flex-row items-center justify-center gap-6'> {/* flex flex-rol items-center justify-center gap-6 */}
          <QuantityInput 
            min={1} 
            max={90} 
            step={1} 
            defaultValue={1} 
            onQuantityChange={setQuantity} 
          />
          <Label className='max-sm:-order-1'>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
          }).format(Price)}
          </Label>
          <Button
            size="icon" className="bg-main"
            onClick={handlePurchase}
          >
            <ShoppingBagOpen size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
