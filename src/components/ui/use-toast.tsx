'use client';

import * as React from 'react';

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

interface ToastContextProps {
  toast: (props: ToastProps) => void;
}

const ToastContext = React.createContext<ToastContextProps | undefined>(
  undefined
);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>(
    []
  );

  const toast = React.useCallback((props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...props, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-0 right-0 p-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`bg-${
              toast.variant === 'destructive' ? 'destructive' : 'background'
            } text-${
              toast.variant === 'destructive'
                ? 'destructive-foreground'
                : 'foreground'
            } px-6 py-4 rounded-lg shadow-lg transition-opacity duration-300 border ${
              toast.variant === 'destructive'
                ? 'border-destructive'
                : 'border-border'
            }`}
          >
            {toast.title && (
              <h3 className="font-medium text-sm">{toast.title}</h3>
            )}
            {toast.description && (
              <p className="text-sm opacity-90">{toast.description}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Export toast function for direct import
export const toast = (props: ToastProps) => {
  if (typeof window !== 'undefined') {
    // This is a hack for direct imports, not ideal but works for this demo
    const toast = document.createEvent('CustomEvent');
    toast.initCustomEvent('toast', true, true, props);
    window.dispatchEvent(toast);
    console.warn(
      'Using toast outside of component context. Consider using useToast hook instead.'
    );
  }
};
