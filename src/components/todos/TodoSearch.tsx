import React from 'react';
import { Input } from '@nextui-org/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface TodoSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const TodoSearch: React.FC<TodoSearchProps> = ({
  search,
  onSearchChange,
}) => {
  return (
    <Input
      placeholder="Cari todo..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      size="lg"
      isClearable
      onClear={() => onSearchChange('')}
      classNames={{
        input: 'text-base',
        inputWrapper: 'bg-white shadow-sm',
      }}
      startContent={
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      }
    />
  );
};