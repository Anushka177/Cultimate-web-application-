import React from 'react';
import './index.css';

export default function RightBlock(){

     return( <>
        {"{"}% extends 'layout.html' %{"}"} {"{"}% block body %{"}"}
        <div
          className="container py-2 mx-auto my-50 h-10 text-center"
          style={{ margin: "9rem" }}
        >
          <div className="row">
            <div className="col-sm py-2 py-md-3">
              <div
                className="card card-body"
                style={{
                  justifyContent: "center",
                  backgroundColor: "blanchedalmond"
                }}
              >
                <h1 className="text-center" style={{ color: "black", fontSize: 20 }}>
                  <b>
                    Sorry we couldn't process your request currently. <br /> Please
                    try again
                  </b>
                </h1>
                <a href="{{ url_for('home') }}">
                  <button
                    type="submit"
                    className="btn btn-info text-center"
                    style={{ color: "black", fontWeight: "bold", margin: "1rem" }}
                  >
                    Try again
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {"{"}% endblock %{"}"}
      </>
      
)
}