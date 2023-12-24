import React from 'react';
import './index.css';
import Back from './back';

export default function Crop_Result(){

     return(<>
        <Back/>

        {"{"}% extends 'layout.html' %{"}"} {"{"}% block body %{"}"}
        <style
          dangerouslySetInnerHTML={{
            __html: "\n  .mt-0 {\n  margin-top: 50 !important;\n}\n"
          }}
        />
        <div
          className="container py-2 mx-auto my-50 h-10 "
          style={{ margin: "12rem" }}
        >
          <div className="row">
            <div className="col-sm py-2 py-md-3">
              <div className="card card-body" style={{ justifyContent: "center" }}>
                <h1 className="text-center">
                  <b>
                    You should grow{" "}
                    <i>
                      {"{"}
                      {"{"} prediction {"}"}
                      {"}"}{" "}
                    </i>
                    in your farm
                  </b>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {"{"}% endblock %{"}"}
      </>
      
)
}