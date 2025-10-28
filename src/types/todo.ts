export interface Todo {
  id: number;
  title: string;
  status: 'created' | 'on_going' | 'completed' | 'problem';
  problem_desc?: string;
  ai_recommendation?: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateTodoDto {
  status?: 'created' | 'on_going' | 'completed' | 'problem';
  problem_desc?: string;
}

export interface CreateTodoDto {
  title: string;
}