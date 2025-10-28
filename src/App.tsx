import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { useTodos } from './hooks/useTodos';
import { useTodoMutations } from './hooks/useTodoMutations';
import { Footer } from './components/common/Footer';
import { TodoForm } from './components/todos/TodoForm';
import { TodoSearch } from './components/todos/TodoSearch';
import { TodoTable } from './components/todos/TodoTable';
import { TodoModal } from './components/todos/TodoModal';
import { Header } from './layout/Header';
import { StatsCards } from './layout/StatsCards';
import type { Todo } from './types/todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [updateStatus, setUpdateStatus] = useState('');
  const [problemDesc, setProblemDesc] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: todos = [], isLoading, error } = useTodos(search);
  const { createMutation, updateMutation } = useTodoMutations();
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      createMutation.mutate({ title: newTodo.trim() });
      setNewTodo('');
    }
  };

  const handleOpenDetail = (todo: Todo) => {
    setSelectedTodo(todo);
    setUpdateStatus(todo.status);
    setProblemDesc(todo.problem_desc || '');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
    setProblemDesc('');
  };

  const handleUpdateTodo = () => {
    if (!selectedTodo) return;
    const dto = {
      status: updateStatus as any,
      ...(updateStatus === 'problem' && problemDesc.trim() && { problem_desc: problemDesc.trim() })
    };
    updateMutation.mutate({
      id: selectedTodo.id,
      dto,
    }, {
      onSuccess: handleCloseModal
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <StatsCards todos={todos} />
        <Card className="w-full shadow-2xl border border-white/20 bg-white/90 backdrop-blur-sm">
          <CardHeader className="flex flex-col gap-4 px-6 pt-6 pb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <TodoForm
              newTodo={newTodo}
              onTodoChange={setNewTodo}
              onSubmit={handleAddTodo}
              isLoading={createMutation.isPending}
            />
            <TodoSearch
              search={search}
              onSearchChange={setSearch}
            />
          </CardHeader>
          <Divider />
          <CardBody className="px-3 md:px-6 pb-6">
            <TodoTable
              todos={todos}
              onTodoClick={handleOpenDetail}
              isLoading={isLoading}
              error={error}
            />
          </CardBody>
        </Card>
        <Footer />
        <TodoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedTodo={selectedTodo}
          updateStatus={updateStatus}
          onStatusChange={setUpdateStatus}
          problemDesc={problemDesc}
          onProblemDescChange={setProblemDesc}
          onUpdate={handleUpdateTodo}
          isLoading={updateMutation.isPending}
        />
      </div>
    </div>
  );
}

export default App;