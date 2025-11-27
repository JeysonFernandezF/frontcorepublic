import { reactive } from 'vue';

// Define una interfaz para el estado de los modales
interface ModalState {
  [key: string]: boolean;
}

const modalState = reactive<ModalState>({});

export function useModal() {

  const openModal = (modalName: string): void => {
    modalState[modalName] = true;
  };

  const closeModal = (modalName: string): void => {
    modalState[modalName] = false;
  };

  const isModalOpen = (modalName: string): boolean => {
    return !!modalState[modalName];
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
  };
}
