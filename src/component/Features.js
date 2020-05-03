import React from "react";
import "./Box.css";
import { ShakeLittle, ShakeHorizontal, Shake } from "reshake";
const Features = () => {
  return (
    <div className="App">
      <h1>Features</h1>
      <div className="grid">
        <ShakeLittle>
          <div className="box box1">
            <img
              src="https://thumbs.dreamstime.com/b/isolated-object-maraca-instrument-symbol-set-mexican-vector-icon-stock-illustration-collection-149929910.jpg"
              width="200px"
            />
          </div>
        </ShakeLittle>
        <ShakeHorizontal>
          <div className="box box2">
            <img
              src="https://www.fidelissecurity.com/wp-content/uploads/2019/02/magic-8-1.png"
              width="200px"
            />
          </div>
        </ShakeHorizontal>
        <Shake
          h={0}
          v={100}
          r={32}
          dur={300}
          int={10}
          max={100}
          fixed={false}
          fixedStop={true}
          freez={false}
        >
          <div className="box box3">
            <img
              src="https://i.pinimg.com/236x/75/76/5d/75765de73bfae5b6ac0e437af2bc4c77.jpg"
              width="200px"
            />
          </div>
        </Shake>
        <Shake
          h={0}
          v={100}
          r={32}
          dur={300}
          int={10}
          max={100}
          fixed={false}
          fixedStop={true}
          freez={false}
        >
          <div className="box box4">
            <img
              src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/82639551_2952274098116068_9019067735438524416_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=dlz_QW6yxWsAX8Cbdin&_nc_ht=scontent.fyyc2-1.fna&oh=8b2688c2f9932ea3d52d3035a20e4ece&oe=5ED24915"
              width="200px"
            />
          </div>
        </Shake>
      </div>
    </div>
  );
};

export default Features;
