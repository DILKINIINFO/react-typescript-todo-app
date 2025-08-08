export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';