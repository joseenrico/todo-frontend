import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-user-id': import.meta.env.VITE_USER_ID,
  },
});

export interface Todo {
  id: number;
  title: string;
  status: 'created' | 'completed' | 'on_going' | 'problem';
  problem_desc?: string;
  ai_recommendation?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTodoDto {
  title: string;
}

export interface UpdateTodoDto {
  status: 'created' | 'completed' | 'on_going' | 'problem';
  problem_desc?: string;
}

export const todoApi = {
  getTodos: async (search?: string): Promise<Todo[]> => {
    const { data } = await api.get('/todos', {
      params: { search },
    });
    return data;
  },

  getTodoById: async (id: number): Promise<Todo> => {
    const { data } = await api.get(`/todos/${id}`);
    return data;
  },

  createTodo: async (dto: CreateTodoDto): Promise<Todo> => {
    const { data } = await api.post('/todos', dto);
    return data;
  },

  updateTodo: async (id: number, dto: UpdateTodoDto): Promise<Todo> => {
    const { data } = await api.patch(`/todos/${id}`, dto);
    return data;
  },
};