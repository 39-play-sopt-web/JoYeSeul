import { createPortal } from "react-dom";
import * as styles from "./modal.css.js";
import { useRef } from "react";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  title,
  description,
  confirmText = "확인",
  onConfirm,
}) => {
  const confirmButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocused = document.activeElement;
    confirmButtonRef.current?.focus();

    return () => {
      previousFocused?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <button
          ref={confirmButtonRef}
          type="button"
          className={styles.actionButton}
          onClick={onConfirm}
        >
          {confirmText}
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
