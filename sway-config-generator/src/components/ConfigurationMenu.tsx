import { useState } from "react";
import { Accordion, Button, Offcanvas } from "react-bootstrap";
import WallpaperPicker from "./ConfigurationMenuComponents/WallpaperPicker";
import WorkspaceConfigurator from "./ConfigurationMenuComponents/WorkspaceConfigurator";
import StartupProgramConfigurator from "./ConfigurationMenuComponents/StartupProgramConfigurator";

function ConfigurationMenu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Editor
      </Button>

      <Offcanvas show={show} placement="end" onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sway configuration Generator</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <WallpaperPicker />

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Workspace configuration</Accordion.Header>
              <Accordion.Body>
                <WorkspaceConfigurator />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>startup programs</Accordion.Header>
              <Accordion.Body>
                <StartupProgramConfigurator />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ConfigurationMenu;
