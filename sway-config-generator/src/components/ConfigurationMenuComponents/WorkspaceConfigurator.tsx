import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function WorkspaceConfigurator() {
  const dispatch = useDispatch();
  const defaultWorkspaces = useSelector(
    (state: RootState) => state.parameters.workspaceNames,
  );
  const defaultWorkspaceAmount = useSelector(
    (state: RootState) => state.parameters.numberOfWorkspaces,
  );
  const [count, setCount] = useState<number>(defaultWorkspaceAmount);
  const [names, setNames] = useState<string[]>(defaultWorkspaces);

  function handleCountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setCount(value);

    // Resize the names array to match the count
    setNames((prev) => {
      const updated = [...prev];
      updated.length = value;
      return updated;
    });
  }

  function handleNameChange(index: number, value: string) {
    setNames((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function renderWorkspaceNameForms() {
    return Array.from({ length: count }).map((_, i) => (
      <Form.Group key={i} className="mb-3">
        <Form.Label>Workspace {i + 1} Name</Form.Label>
        <Form.Control
          type="text"
          value={names[i] || ""}
          onChange={(e) => handleNameChange(i, e.target.value)}
        />
      </Form.Group>
    ));
  }

  return (
    <>
      <p>workspace configurator</p>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Number of Workspaces</Form.Label>
          <Form.Control
            type="number"
            min={1}
            value={count}
            onChange={handleCountChange}
          />
        </Form.Group>

        {renderWorkspaceNameForms()}
      </Form>
    </>
  );
}

export default WorkspaceConfigurator;
