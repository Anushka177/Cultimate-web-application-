import React from 'react';
import './index.css';
import Back from './back';



export default function Disease(){
    return(
        <>
           <Back/>

        {"{"}% extends 'layout.html' %{"}"} {"{"}% block body %{"}"}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  html body {\n    background-color: rgb(206, 206, 228);\n  }\n"
          }}
        />
        <br />
        <br />
        <h2 style={{ textAlign: "center", margin: 0, color: "black" }}>
          <b>Find out which disease has been caught by your plant</b>
        </h2>
        <br />
        <br />
        <div
          style={{
            width: 350,
            height: "50rem",
            margin: "0px auto",
            color: "black",
            borderRadius: 25,
            padding: "10px 10px",
            fontWeight: "bold"
          }}
        >
          <form className="form-signin" method="post" encType="multipart/form-data">
            <h2 className="h4 mb-3 font-weight-normal">
              <b>Please Upload The Image</b>
            </h2>
            <input
              type="file"
              name="file"
              className="form-control-file"
              id="inputfile"
              onchange="preview_image(event)"
              style={{ fontWeight: "bold" }}
            />
            <br />
            <br />
            <img id="output-image" className="rounded mx-auto d-block" />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              style={{ fontWeight: "bold" }}
            >
              Predict
            </button>
          </form>
        </div>
        {"{"}% endblock %{"}"}
      </>
       
    )}