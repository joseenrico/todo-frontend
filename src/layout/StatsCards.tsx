import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import {
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { IconWrapper } from '../components/common/IconWrapper';
import type { Todo } from '../types/todo';

interface StatsCardsProps {
  todos: Todo[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ todos }) => {
  const todoStats = {
    total: todos.length,
    completed: todos.filter(todo => todo.status === 'completed').length,
    inProgress: todos.filter(todo => todo.status === 'on_going').length,
    problem: todos.filter(todo => todo.status === 'problem').length,
  };

  const stats = [
    {
      icon: ChartBarIcon,
      value: todoStats.total,
      label: 'Total Todo',
      color: 'text-blue-600',
    },
    {
      icon: CheckCircleIcon,
      value: todoStats.completed,
      label: 'Selesai',
      color: 'text-green-600',
    },
    {
      icon: ClockIcon,
      value: todoStats.inProgress,
      label: 'Sedang Berlangsung',
      color: 'text-yellow-600',
    },
    {
      icon: ExclamationTriangleIcon,
      value: todoStats.problem,
      label: 'Masalah',
      color: 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-shadow">
          <CardBody className="p-4 text-center">
            <IconWrapper className="mb-2">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </IconWrapper>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};