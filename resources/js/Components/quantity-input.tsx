import React, { useState, useEffect, useRef } from 'react';
import { CaretDown, CaretUp } from "@phosphor-icons/react";

interface QuantityInputProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  placeholder?: string;
  onQuantityChange?: (quantity: number) => void;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({ min = 1, max = 90, step = 1, defaultValue = 1, placeholder, onQuantityChange }) => {
  const [value, setValue] = useState<number>(defaultValue);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleUpClick = () => {
    if (value < max) {
      setValue(prevValue => {
        const newValue = prevValue + step;
        if (onQuantityChange) onQuantityChange(newValue);
        return newValue;
      });
    }
  };

  const handleDownClick = () => {
    if (value > min) {
      setValue(prevValue => {
        const newValue = prevValue - step;
        if (newValue < min) return min;
        if (onQuantityChange) onQuantityChange(newValue);
        return newValue;
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      if (onQuantityChange) onQuantityChange(newValue);
    }
  };

  const startIncrement = (direction: 'up' | 'down') => {
    intervalRef.current = setInterval(() => {
      if (direction === 'up') {
        handleUpClick();
      } else if (direction === 'down') {
        handleDownClick();
      }
    }, 100);
  };

  const handleMouseDown = (direction: 'up' | 'down') => {
    delayTimeoutRef.current = setTimeout(() => {
      startIncrement(direction);
    }, 250);
  };

  const handleMouseUp = () => {
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.deltaY < 0) {
    handleUpClick();
  } else {
    handleDownClick();
  }
};


  useEffect(() => {
    return () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="quantity" onWheel={handleWheel}>
      <input 
        type="number" 
        value={value} 
        min={min} 
        max={max} 
        step={step} 
        placeholder={placeholder}
        onChange={handleChange} 
      />
      <div className="quantity-nav">
        <button 
          className="quantity-button quantity-up" 
          onClick={handleUpClick}
          onMouseDown={() => handleMouseDown('up')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <CaretUp />
        </button>
        <button 
          className="quantity-button quantity-down" 
          onClick={handleDownClick}
          onMouseDown={() => handleMouseDown('down')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <CaretDown />
        </button>
      </div>
    </div>
  );
};
