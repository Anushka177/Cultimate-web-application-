import React from 'react';
import './index.css';

import Back from './back';


export default function Crop(){

    return(
<>
<Back/>

  <h2 style={{ textAlign: "center", margin: 0, color: "black" }}>
    <b>Find out the most suitable crop to grow in your farm</b>
  </h2>
  <br />
  <div
    style={{
      width: 350,
      height: "50rem",
      margin: "0px auto",
      color: "black",
      borderRadius: 25,
      padding: "10px 10px"
    }}
  >
    <form method="POST" action="{{ url_for('crop_prediction') }}">
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
      <div className="form-group">
        <label htmlFor="ph" style={{ fontSize: 17 }}>
          <b>ph level</b>
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="ph"
          name="ph"
          placeholder="Enter the value"
          style={{ fontWeight: "bold" }}
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="Rainfall" style={{ fontSize: 17 }}>
          <b>Rainfall (in mm)</b>
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="Rainfall"
          name="rainfall"
          placeholder="Enter the value"
          style={{ fontWeight: "bold" }}
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="State" style={{ fontSize: 17 }}>
          <b>State</b>
        </label>
        <select
          onchange="print_city('state', this.selectedIndex);"
          id="sts"
          name="stt"
          className="form-control"
          style={{ fontWeight: "bold", color: "black" }}
          required=""
        />
        <br />
        <label htmlFor="City" style={{ fontSize: 17 }}>
          <b>City</b>
        </label>
        <select
          id="state"
          className="form-control"
          name="city"
          style={{ fontWeight: "bold", color: "black" }}
          required=""
        />
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
</>

    )
}