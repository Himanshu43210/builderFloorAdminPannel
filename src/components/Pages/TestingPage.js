import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import RenderComponent from "../customComponents/ComponentRenderer";

export default function Home() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    fetch('https://api.npoint.io/b616239dfe0128430285')
      .then(response => response.json())
      .then(data => {
        setDisplayText(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  return (
    <>
      <Card className="home-screen">
        <RenderComponent jsonToRender={displayText || {}} />
      </Card>
    </>
  );
}
