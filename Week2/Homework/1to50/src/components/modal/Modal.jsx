import { createPortal } from "react-dom";
import * as styles from "./modal.css.js";

const Modal = ({
  isOpen,
  title,
  description,
  confirmText = "확인",
  onConfirm,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <button
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
