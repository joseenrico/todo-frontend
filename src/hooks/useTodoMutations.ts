import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi, type UpdateTodoDto } from '../api/api';

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: todoApi.createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, dto }: { id: number; dto: UpdateTodoDto }) =>
      todoApi.updateTodo(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    createMutation,
    updateMutation,
  };
};