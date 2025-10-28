import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import {
  DocumentTextIcon,
  PlusIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  LightBulbIcon,
  CalendarIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import type { Todo } from '../../types/todo';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTodo: Todo | null;
  updateStatus: string;
  onStatusChange: (status: string) => void;
  problemDesc: string;
  onProblemDescChange: (desc: string) => void;
  onUpdate: () => void;
  isLoading: boolean;
}

export const TodoModal: React.FC<TodoModalProps> = ({
  isOpen,
  onClose,
  selectedTodo,
  updateStatus,
  onStatusChange,
  problemDesc,
  onProblemDescChange,
  onUpdate,
  isLoading,
}) => {
  if (!selectedTodo) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      scrollBehavior="inside"
      classNames={{
        base: "border border-blue-100",
        header: "border-b border-gray-200",
        footer: "border-t border-gray-200",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 from-blue-50 to-purple-50">
              <div className="flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold">Detail Todo</h2>
              </div>
            </ModalHeader>
            <ModalBody className="py-6">
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-600 font-semibold mb-1 flex items-center gap-1">
                    <DocumentTextIcon className="w-4 h-4" />
                    Judul Todo
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {selectedTodo.title}
                  </p>
                </div>
                
                <Select
                  placeholder="Pilih status terbaru"
                  selectedKeys={[updateStatus]}
                  onChange={(e) => onStatusChange(e.target.value)}
                  classNames={{
                    trigger: "bg-white border border-gray-200",
                  }}
                  labelPlacement="outside"
                >
                  <SelectItem 
                    key="created" 
                    value="created" 
                    startContent={<PlusIcon className="w-4 h-4" />}
                  >
                    Dibuat
                  </SelectItem>
                  <SelectItem 
                    key="on_going" 
                    value="on_going" 
                    startContent={<ClockIcon className="w-4 h-4" />}
                  >
                    Sedang Berlangsung
                  </SelectItem>
                  <SelectItem 
                    key="completed" 
                    value="completed" 
                    startContent={<CheckCircleIcon className="w-4 h-4" />}
                  >
                    Selesai
                  </SelectItem>
                  <SelectItem 
                    key="problem" 
                    value="problem" 
                    startContent={<ExclamationTriangleIcon className="w-4 h-4" />}
                  >
                    Masalah
                  </SelectItem>
                </Select>
                
                {updateStatus === 'problem' && (
                  <Textarea
                    label={
                      <div className="flex items-center gap-1">
                        <ExclamationCircleIcon className="w-4 h-4" />
                        Deskripsi Masalah
                      </div>
                    }
                    placeholder="Jelaskan masalah atau kendala yang kamu hadapi..."
                    value={problemDesc}
                    onChange={(e) => onProblemDescChange(e.target.value)}
                    minRows={3}
                    classNames={{
                      input: "resize-y min-h-[80px]",
                    }}
                    labelPlacement="outside"
                  />
                )}
                {selectedTodo.ai_recommendation && (
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <LightBulbIcon className="w-5 h-5 text-green-600" />
                      <p className="text-sm font-semibold text-green-700">
                        Rekomendasi AI
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedTodo.ai_recommendation}
                    </p>
                  </div>
                )}
                {selectedTodo.problem_desc && (
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-700 font-semibold mb-1 flex items-center gap-1">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      Catatan Masalah
                    </p>
                    <p className="text-sm text-gray-700">
                      {selectedTodo.problem_desc}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-gray-500 font-medium mb-1 flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      Dibuat Pada
                    </p>
                    <p className="text-gray-700">
                      {new Date(selectedTodo.created_at).toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1 flex items-center gap-1">
                      <ArrowPathIcon className="w-4 h-4" />
                      Diperbarui
                    </p>
                    <p className="text-gray-700">
                      {new Date(selectedTodo.updated_at).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Batal
              </Button>
              <Button
                color="primary"
                onPress={onUpdate}
                isLoading={isLoading}
                className="font-semibold"
                startContent={<CheckCircleIcon className="w-4 h-4" />}
              >
                Perbarui Status
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};