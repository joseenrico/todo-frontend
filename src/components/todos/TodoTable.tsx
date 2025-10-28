import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
} from '@nextui-org/react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { IconWrapper } from '../common/IconWrapper';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { statusColors, statusLabels } from '../../constant/todo';
import type { Todo } from '../../types/todo';

interface TodoTableProps {
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
  isLoading: boolean;
  error: Error | null;
}

export const TodoTable: React.FC<TodoTableProps> = ({
  todos,
  onTodoClick,
  isLoading,
  error,
}) => {
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-red-700">
          <p>Yah terjadi kesalahan nih: {error.message}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center py-12 gap-4">
        <p className="text-gray-600">Memuat todo list...</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Table 
        aria-label="Todo list table"
        classNames={{
          base: "max-h-[500px] overflow-auto",
          table: "min-h-[200px]",
        }}
        removeWrapper
      >
        <TableHeader>
          <TableColumn className="bg-blue-50 text-blue-800 font-semibold">No.</TableColumn>
          <TableColumn className="bg-blue-50 text-blue-800 font-semibold">JUDUL</TableColumn>
          <TableColumn className="bg-blue-50 text-blue-800 font-semibold">STATUS</TableColumn>
          <TableColumn className="bg-blue-50 text-blue-800 font-semibold">AKSI</TableColumn>
        </TableHeader>
        <TableBody emptyContent={
          <div className="text-center py-8">
            <IconWrapper className="mb-2">
              <DocumentTextIcon className="w-12 h-12 text-gray-400" />
            </IconWrapper>
            <p className="text-gray-500">Belum ada todo nih. Yuk tambahkan yang pertama!</p>
          </div>
        }>
          {todos.map((todo, index) => (
            <TableRow key={todo.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-semibold">{todo.title}</TableCell>
              <TableCell>
                <Chip
                  color={statusColors[todo.status]}
                  variant="flat"
                  size="md"
                  className="font-medium"
                >
                  {statusLabels[todo.status]}
                </Chip>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  color="secondary"
                  variant="flat"
                  onPress={() => onTodoClick(todo)}
                  startContent={<EyeIcon className="w-4 h-4" />}
                >
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};