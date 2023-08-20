import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    // console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 col-xs-12">
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img
                    src={photo.src.landscape}
                    key={index}
                    alt={photo.alt}
                    className="img-fluid shadow"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
