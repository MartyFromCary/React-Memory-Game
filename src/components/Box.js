import React from "react";

const styles = {
  img: {
    height: 200,
    width: 200,
    margin: 10
  }
};

const Box = props => (
  <div className="col-md-3">
    <img
      style={styles.img}
      src={props.src}
      alt="character"
      onClick={() => props.onClick(props.charNr)}
    />
  </div>
);

export default Box;
