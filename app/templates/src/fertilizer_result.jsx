import React from 'react';
import './index.css';
import Back from './back';

export default function Fertilzer_result(){

     return( <>
        <Back/>

        {"{"}% extends 'layout.html' %{"}"} {"{"}% block body %{"}"}
        <div
          className="container py-2 mx-auto my-50 h-10 "
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
                <p className="text-center" style={{ color: "black", fontSize: 20 }}>
                  {"{"}
                  {"{"} recommendation {"}"}
                  {"}"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {"{"}% endblock %{"}"}
      </>
      
)
}