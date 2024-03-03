import emailjs from "emailjs-com";
import {
  Container,
  Form,
  Input,
  Input1,
  Label,
  Subcontainer,
  Textarea,
  Div,
  Input2,
} from "./ContactStyle";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p64npit",
        "template_ujxttso",
        e.target,
        "user_mQCLtDKW1FU6tMyaelK6p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact">
      <h1 className="hea">Contact me </h1>
      <Form onSubmit={sendEmail}>
        <Subcontainer>
          <Div>
            <Label>Name</Label>
            <br />
            <Input type="text" name="name" required />
          </Div>
          <div>
            <Label>Email</Label>
            <br />
            <Input type="email" name="email" required />
          </div>
        </Subcontainer>
        <Label>Subject</Label>
        <br />
        <Input1 type="text" name="subject" required />
        <br />
        <Label>Message</Label>
        <br />
        <Textarea name="message" required />
        <br />
        <Input2 type="submit" value="Send Message" />
        <br />
      </Form>
    </Container>
  );
};
