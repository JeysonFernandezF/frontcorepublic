import { ref } from "vue";

interface Toast {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

const toasts = ref<Toast[]>([]);

export function useToast() {
  const showToast = (toast: Toast) => {
    toasts.value.push(toast);
    // eliminar automáticamente después de la duración
    setTimeout(() => {
      toasts.value.shift();
    }, toast.duration || 3000);
  };

  return {
    toasts,
    showToast
  };
}
