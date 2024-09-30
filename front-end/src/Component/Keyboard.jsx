import { useState } from "react";
import "../../src/keyboard.css";

function Keyboard() {
  const [pressedKey, setPressedKey] = useState(null);

  const handleKeyDown = (e) => {
    console.log(e.key);
    setPressedKey(e.key.toLowerCase());
  };

  const handleKeyUp = () => {
    setTimeout(() => {
      setPressedKey(null);
    }, 100);
  };

  return (
    <div className="container">
      <section>
        <input
          className="TextBox"
          type="text"
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Click Here to Start Typing"
        ></input>
      </section>
      <section className="Keyboard">
        <section className="row">
          <p className={`keys ${pressedKey === "`" ? `active` : ``}`}>`</p>
          <p className={`keys ${pressedKey === "1" ? `active` : ``}`}>1</p>
          <p className={`keys ${pressedKey === "2" ? `active` : ``}`}>2</p>
          <p className={`keys ${pressedKey === "3" ? `active` : ``}`}>3</p>
          <p className={`keys ${pressedKey === "4" ? `active` : ``}`}>4</p>
          <p className={`keys ${pressedKey === "5" ? `active` : ``}`}>5</p>
          <p className={`keys ${pressedKey === "6" ? `active` : ``}`}>6</p>
          <p className={`keys ${pressedKey === "7" ? `active` : ``}`}>7</p>
          <p className={`keys ${pressedKey === "8" ? `active` : ``}`}>8</p>
          <p className={`keys ${pressedKey === "9" ? `active` : ``}`}>9</p>
          <p className={`keys ${pressedKey === "0" ? `active` : ``}`}>0</p>
          <p className={`keys ${pressedKey === "-" ? `active` : ``}`}>-</p>
          <p className={`keys ${pressedKey === "=" ? `active` : ``}`}>=</p>
          <p
            className={`Backspace ${
              pressedKey === "backspace" ? `active` : ``
            }`}
          >
            Backspace
          </p>
        </section>
        <section className="row">
          <p className={`Tab ${pressedKey === "tab" ? `active` : ``}`}>Tab</p>
          <p className={`keys ${pressedKey === "q" ? `active` : ``}`}>Q</p>
          <p className={`keys ${pressedKey === "w" ? `active` : ``}`}>W</p>
          <p className={`keys ${pressedKey === "e" ? `active` : ``}`}>E</p>
          <p className={`keys ${pressedKey === "r" ? `active` : ``}`}>R</p>
          <p className={`keys ${pressedKey === "t" ? `active` : ``}`}>T</p>
          <p className={`keys ${pressedKey === "y" ? `active` : ``}`}>Y</p>
          <p className={`keys ${pressedKey === "i" ? `active` : ``}`}>I</p>
          <p className={`keys ${pressedKey === "o" ? `active` : ``}`}>O</p>
          <p className={`keys ${pressedKey === "p" ? `active` : ``}`}>P</p>
          <p className={`keys ${pressedKey === "[" ? `active` : ``}`}>{`[`}</p>
          <p className={`keys ${pressedKey === "]" ? `active` : ``}`}>{`]`}</p>
          <p className={`Slash ${pressedKey === "\\" ? `active` : ``}`}>\</p>
        </section>
        <section className="row">
          <p
            className={`Caps_Lock ${pressedKey === "capslock" ? `active` : ``}`}
          >
            Caps Lock
          </p>
          <p className={`keys ${pressedKey === "a" ? `active` : ``}`}>A</p>
          <p className={`keys ${pressedKey === "s" ? `active` : ``}`}>S</p>
          <p className={`keys ${pressedKey === "d" ? `active` : ``}`}>D</p>
          <p className={`keys ${pressedKey === "f" ? `active` : ``}`}>F</p>
          <p className={`keys ${pressedKey === "g" ? `active` : ``}`}>G</p>
          <p className={`keys ${pressedKey === "h" ? `active` : ``}`}>H</p>
          <p className={`keys ${pressedKey === "j" ? `active` : ``}`}>J</p>
          <p className={`keys ${pressedKey === "k" ? `active` : ``}`}>K</p>
          <p className={`keys ${pressedKey === "l" ? `active` : ``}`}>L</p>
          <p className={`keys ${pressedKey === ";" ? `active` : ``}`}>;</p>
          <p className={`keys ${pressedKey === "'" ? `active` : ``}`}>'</p>
          <p className={`Enter_Key ${pressedKey === "enter" ? `active` : ``}`}>
            Enter
          </p>
        </section>
        <section className="row">
          <p className={`Shift_Left ${pressedKey === "shift" ? `active` : ``}`}>
            Shift
          </p>
          <p className={`keys ${pressedKey === "z" ? `active` : ``}`}>Z</p>
          <p className={`keys ${pressedKey === "x" ? `active` : ``}`}>X</p>
          <p className={`keys ${pressedKey === "c" ? `active` : ``}`}>C</p>
          <p className={`keys ${pressedKey === "v" ? `active` : ``}`}>V</p>
          <p className={`keys ${pressedKey === "b" ? `active` : ``}`}>B</p>
          <p className={`keys ${pressedKey === "n" ? `active` : ``}`}>N</p>
          <p className={`keys ${pressedKey === "," ? `active` : ``}`}>,</p>
          <p className={`keys ${pressedKey === "." ? `active` : ``}`}>.</p>
          <p className={`keys ${pressedKey === "/" ? `active` : ``}`}>/</p>
          <p className={`keys ${pressedKey === "?" ? `active` : ``}`}>?</p>
          <p
            className={`Shift_Right ${pressedKey === "shift" ? `active` : ``}`}
          >
            Shift
          </p>
        </section>
        <section className="row">
          <p className={`Ctrl ${pressedKey === "control" ? `active` : ``}`}>
            Ctrl
          </p>
          <p className={`Alt ${pressedKey === "alt" ? `active` : ``}`}>Alt</p>
          <p className={`Space_Key ${pressedKey === " " ? `active` : ``}`}>
            ____
          </p>
          <p className={`Ctrl ${pressedKey === "alt" ? `active` : ``}`}>Alt</p>
          <p className={`Alt ${pressedKey === "control" ? `active` : ``}`}>
            Ctrl
          </p>
        </section>
      </section>
    </div>
  );
}

export default Keyboard;
