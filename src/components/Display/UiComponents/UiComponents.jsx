import React from "react";
import {
  Alert,
  Button,
  Card,
  Form,
  Input,
  List,
  Modal,
  Navbar,
  Tabs,
} from "../..";
import "./UiComponents.scss";

const sendForm = (e) => {
  e.preventDefault();
  console.log("Wysłano formularz");
};

export const UiComponents = () => {
  return (
    <div className="UiComponents ">
      <h2>UI Components</h2>
      <Button onClick={() => alert("Kliknięto!")}>Kliknij mnie</Button>
      <br /><br />
      <Input type="text" placeholder="Wpisz coś..." />
      <h3>FORM</h3>
      <Form onSubmit={sendForm}>
        <Input type="text" placeholder="Wpisz coś..." />
        <Button type="submit">Wyślij</Button>
      </Form>
      <br />
      <Alert type="info" message="To jest komunikat informacyjny" />
      <br />
      <Modal isOpen={true} onClose={() => console.log("Zamknięto modal")}>
        Treść modala
      </Modal>
      <br />
      <Navbar>
        <Button>Strona główna</Button>
        <Button>O nas</Button>
        <Button>Kontakt</Button>
      </Navbar>
      <br />
      <Tabs defaultTab={0}>
        <div label="Zakładka 1">Treść zakładki 1</div>
        <div label="Zakładka 2">Treść zakładki 2</div>
        <div label="Zakładka 3">Treść zakładki 3</div>
      </Tabs>
      <br />
      <Card>Treść karty</Card>
      <List items={["Pierwszy element", "Drugi element", "Trzeci element"]} />
    </div>
  );
};
