import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface ShortcutModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (shortcut: string) => void;
}

export function ShortcutModal({ show, onClose, onSave }: ShortcutModalProps) {
  const [capturedShortcut, setCapturedShortcut] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const parts: string[] = [];

      if (e.ctrlKey) parts.push("Ctrl");
      if (e.shiftKey) parts.push("Shift");
      if (e.altKey) parts.push("Alt");
      if (e.metaKey) parts.push("Meta");

      parts.push(e.key);

      const shortcut = parts.join("+");

      setCapturedShortcut(shortcut);
      setIsConfirming(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show]);

  const handleConfirm = () => {
    if (capturedShortcut) {
      onSave(capturedShortcut);
      onClose();
      setCapturedShortcut(null);
      setIsConfirming(false);
    }
  };

  const handleCancel = () => {
    setCapturedShortcut(null);
    setIsConfirming(false);
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isConfirming ? "Confirm Shortcut" : "Press a Shortcut"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!isConfirming && <p>Press any key combination now…</p>}

        {isConfirming && (
          <p>
            You pressed: <strong>{capturedShortcut}</strong>
            <br />
            Do you want to save this shortcut?
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        {isConfirming ? (
          <>
            <Button variant="secondary" onClick={handleCancel}>
              Try Again
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Save Shortcut
            </Button>
          </>
        ) : (
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
