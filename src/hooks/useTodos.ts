import { useQuery } from '@tanstack/react-query';
import { todoApi } from '../api/api';
import type { Todo } from '../types/todo';

export const useTodos = (search?: string) => {
  return useQuery<Todo[]>({
    queryKey: ['todos', search],
    queryFn: () => todoApi.getTodos(search || undefined),
  });
};