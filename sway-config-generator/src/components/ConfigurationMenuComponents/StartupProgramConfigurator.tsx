import { useDispatch, useSelector } from "react-redux";
import type { JSX } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../Styles/configurationMenu.css";
import { parametersSetStartupPrograms } from "../../store/parametersSlice";
import { ShortcutModal } from "./ShortcutModal";

function StartupProgramConfigurator() {
  const dispatch = useDispatch();
  const [startupPrograms, setStartupPrograms] = useState<string[]>([]);
  const [newProgram, setNewProgram] = useState("");
  const [showShortcutModal, setShowShortcutModal] = useState(false);
  const [savedShortcut, setSavedShortcut] = useState("");

  useEffect(() => {
    dispatch(parametersSetStartupPrograms(startupPrograms));
  }, [startupPrograms]);

  function addProgram() {
    if (!newProgram.trim()) return;
    setStartupPrograms([...startupPrograms, newProgram.trim()]);
    setNewProgram("");
    setShowShortcutModal(true);
  }

  function updateProgram(index: number, value: string) {
    const updated = [...startupPrograms];
    updated[index] = value;
    setStartupPrograms(updated);
  }

  function removeProgram(index: number) {
    setStartupPrograms(startupPrograms.filter((_, i) => i !== index));
  }

  function renderStartupPrograms() {
    return startupPrograms.map((program, index) => (
      <div key={index} className="startup-program-form">
        <Form.Control
          type="text"
          value={program}
          onChange={(e) => updateProgram(index, e.target.value)}
        />
        <Button
          variant="danger"
          onClick={() => removeProgram(index)}
          className="ms-2"
        >
          –
        </Button>
      </div>
    ));
  }

  return (
    <>
      <ShortcutModal
        show={showShortcutModal}
        onClose={() => setShowShortcutModal(false)}
        onSave={(shortcut) => setSavedShortcut(shortcut)}
      />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Startup programs</Form.Label>

          {renderStartupPrograms()}

          <div className="startup-program-form">
            <Form.Control
              type="text"
              placeholder="Add new program"
              value={newProgram}
              onChange={(e) => setNewProgram(e.target.value)}
            />
            <Button onClick={addProgram} className="ms-2">
              +
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default StartupProgramConfigurator;
