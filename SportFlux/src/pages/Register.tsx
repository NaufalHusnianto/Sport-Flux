import React, { Component } from "react";
import { IonButton, IonContent, IonInput, IonPage, IonText } from "@ionic/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const auth = getAuth();
    const { email, password } = this.state;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="ion-padding-top" scrollY={false}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <div
              style={{
                border: "1px solid #bfbfbf",
                padding: "16px",
                borderRadius: "10px",
                boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.25)",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "16px",
                  color: "#2196f3",
                }}
              >
                Register PAGE
              </h1>
              <IonInput
                type="email"
                id="email"
                placeholder="E-mail"
                onIonChange={(e) => this.handleChangeText(e)}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #2196f3",
                  outline: "none",
                  display: "block",
                  marginBottom: "12px",
                  minWidth: "300px",
                  color: "#2196f3",
                }}
              />
              <IonInput
                type="password"
                id="password"
                placeholder="Password"
                onIonChange={(e) => this.handleChangeText(e)}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #2196f3",
                  outline: "none",
                  display: "block",
                  marginBottom: "12px",
                  minWidth: "300px",
                  color: "#2196f3",
                }}
              />
              <IonButton
                expand="full"
                onClick={this.handleRegisterSubmit}
                style={{
                  padding: "8px",
                  border: "1px solid #2196f3",
                  borderRadius: "8px",
                  minWidth: "200px",
                  color: "white",
                  background: "#2196f3",
                  display: "block",
                  margin: "0 auto",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  outline: "none",
                }}
              >
                Register
              </IonButton>
            </div>
            <IonButton
              expand="full"
              style={{
                padding: "8px",
                border: "1px solid #2196f3",
                borderRadius: "8px",
                minWidth: "200px",
                color: "white",
                background: "#2196f3",
                display: "block",
                margin: "0 auto",
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "bold",
                outline: "none",
                marginTop: "32px",
              }}
            >
              Go to Dashboard
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
