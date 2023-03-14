import React from "react";
import Form from "../../layouts/form";
import Hero from "../../layouts/hero";
const color = '#9600ab'

//https://www.youtube.com/watch?v=t2LvPXHLrek

export default function Page() {
  return <Form />
  //return <Hero />
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '150px',
        flexDirection: 'column'
      }}>

      <h1 style={{ color: color, marginBottom: '50px', fontSize: '1.7rem' }}>Site bientôt en ligne</h1>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, }}>Sotalitrav</h2>
        <h4 style={{ color, fontWeight: '500', textTransform: 'uppercase', marginTop: '5px' }}>Amenagement - construction - negoce</h4>
        <h4 style={{ fontWeight: '500', marginTop: '5px' }}>Email : contact.sotalitrav@gmail.com</h4>
      </div>
    </div>
  );
}
