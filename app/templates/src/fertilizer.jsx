
import React from 'react';
import './index.css';
import Back from './back';



export default function fertilizer(){
    return(<> <>
       <Back/>

        {"{"}% extends 'layout.html' %{"}"} {"{"}% block body %{"}"}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  html body {\n    background-color: rgb(206, 206, 228);\n  }\n"
          }}
        />
        {/*Form Section*/}
        <br />
        <br />
        <h2 style={{ textAlign: "center", margin: 0, color: "black" }}>
          <b>Get informed advice on fertilizer based on soil</b>
        </h2>
        <br />
        <div
          style={{
            width: 350,
            height: "40rem",
            margin: "0px auto",
            color: "black",
            borderRadius: 25,
            padding: "10px 10px"
          }}
        >
          <form method="POST" action="{{ url_for('fert_recommend') }}">
            <div className="form-group">
              <label htmlFor="Nitrogen" style={{ fontSize: 17 }}>
                <b>Nitrogen</b>
              </label>
              <input
                type="number"
                className="form-control"
                id="Nitrogen"
                name="nitrogen"
                placeholder="Enter the value (example:50)"
                style={{ fontWeight: "bold" }}
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phosphorous" style={{ fontSize: 17 }}>
                <b>Phosphorous</b>
              </label>
              <input
                type="number"
                className="form-control"
                id="Phosphorous"
                name="phosphorous"
                placeholder="Enter the value (example:50)"
                style={{ fontWeight: "bold" }}
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="Pottasium" style={{ fontSize: 17 }}>
                <b>Pottasium</b>
              </label>
              <input
                type="number"
                className="form-control"
                id="Pottasium"
                name="pottasium"
                placeholder="Enter the value (example:50)"
                style={{ fontWeight: "bold" }}
                required=""
              />
            </div>
            {/* <div class="form-group">
      <label for="ph" style="font-size: 17px"><b>ph level</b></label>
      <input
        type="text"
        class="form-control"
        id="ph"
        name="ph"
        placeholder="Enter the value"
        style="font-weight: bold"
        required
      />
          </div> */}
            <div className="form-group">
              <label htmlFor="crop" style={{ fontSize: 17 }}>
                <b>Crop you want to grow</b>
              </label>
              <select
                name="cropname"
                className="form-control"
                id="crop"
                placeholder="Select a crop"
                style={{ fontWeight: "bold" }}
                required=""
              >
                <option selected="">Select crop</option>
                <option>rice</option>
                <option>maize</option>
                <option>chickpea</option>
                <option>kidneybeans</option>
                <option>pigeonpeas</option>
                <option>mothbeans</option>
                <option>mungbean</option>
                <option>blackgram</option>
                <option>lentil</option>
                <option>pomegranate</option>
                <option>banana</option>
                <option>mango</option>
                <option>grapes</option>
                <option>watermelon</option>
                <option>muskmelon</option>
                <option>apple</option>
                <option>orange</option>
                <option>papaya</option>
                <option>coconut</option>
                <option>cotton</option>
                <option>jute</option>
                <option>coffee</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-info"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  width: 130,
                  height: 50,
                  borderRadius: 12,
                  fontSize: 21
                }}
              >
                Predict
              </button>
            </div>
          </form>
        </div>
        {"{"}% endblock %{"}"}
      </>
      
 </>)}
