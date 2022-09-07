import React from "react";
import { Container } from "react-bootstrap";

const Client_Id=process.env.CLIENT_ID


const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${Client_Id}&response_type=code&redirect_uri=https://shimmering-sherbet-dc21b4.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <div className="row">
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login with Spotify
        </a>
      </div>
    </Container>
  );
}
