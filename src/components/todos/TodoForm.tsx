import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { DocumentTextIcon, PlusIcon } from '@heroicons/react/24/outline';

interface TodoFormProps {
  newTodo: string;
  onTodoChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  newTodo,
  onTodoChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col md:flex-row gap-3">
      <Input
        placeholder="Tambahkan todo baru kamu..."
        value={newTodo}
        onChange={(e) => onTodoChange(e.target.value)}
        size="lg"
        classNames={{
          input: 'text-base',
          inputWrapper: 'bg-white shadow-sm',
        }}
        startContent={
          <DocumentTextIcon className="w-5 h-5 text-gray-400" />
        }
      />
      <Button
        type="submit"
        color="primary"
        size="lg"
        className="font-semibold"
        isLoading={isLoading}
        startContent={!isLoading ? <PlusIcon className="w-5 h-5" /> : undefined}
      >
        Tambah
      </Button>
    </form>
  );
};