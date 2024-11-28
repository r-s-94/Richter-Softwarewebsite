import "./service.scss";
import StarSignComponent from "./starSign";
import { useState } from "react";

export default function Service() {
  const [showNewPassword, setShowNewPassword] = useState<string>("");
  const [lengthOfSpecialPassword, setLengthOfSpecialPassword] =
    useState<string>("");
  const [specialPasswordNote, setSpecialPasswordNote] =
    useState<boolean>(false);

  const lowerCaseSignArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCaseSignArray: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const numberSignArray: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const specialSignArray: string[] = [
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "?",
    "@",
    "#",
    ",",
    ".",
    "+",
    "-",
    ";",
    ":",
    "<",
    ">",
    "|",
    "{",
    "[",
    "(",
    ")",
    "]",
    "}",
  ];

  /*const [generatePasswortArray, setGeneratePasswortArray] = useState<string[]>(
      []
    );*/

  let generateNewPasswortArray: string[] = [];

  function generatePassword() {
    for (let index = 0; index < 8; index++) {
      const getRandomLowerCaseSign =
        lowerCaseSignArray[
          Math.floor(Math.random() * lowerCaseSignArray.length)
        ];

      const getRandomUpperCaseSign =
        upperCaseSignArray[
          Math.floor(Math.random() * upperCaseSignArray.length)
        ];

      const getRandomNumberSign =
        numberSignArray[Math.floor(Math.random() * numberSignArray.length)];

      const getRandomSpecialSign =
        lowerCaseSignArray[
          Math.floor(Math.random() * lowerCaseSignArray.length)
        ];

      //  console.log(getRandomPasswordSign);

      generateNewPasswortArray.push(getRandomLowerCaseSign);
      generateNewPasswortArray.push(getRandomUpperCaseSign);
      generateNewPasswortArray.push(getRandomNumberSign);
      generateNewPasswortArray.push(getRandomSpecialSign);

      /*setGeneratePasswortArray((prevRandomArray) => [
          ...prevRandomArray,
          getRandomPasswordSign,
        ]);*/
      //newGeneratePasswortArray.push(getRandomPasswordSign);
      console.log(generateNewPasswortArray);
    }

    if (generateNewPasswortArray.length === 8) {
      setShowNewPassword(generateNewPasswortArray.join(""));
      generateNewPasswortArray = [];
    }
  }

  function generateSpecialPassword() {
    if (Number(lengthOfSpecialPassword) >= 8) {
      for (let index = 0; index < Number(lengthOfSpecialPassword); index++) {
        const getRandomLowerCaseSign =
          lowerCaseSignArray[
            Math.floor(Math.random() * lowerCaseSignArray.length)
          ];

        const getRandomUpperCaseSign =
          upperCaseSignArray[
            Math.floor(Math.random() * upperCaseSignArray.length)
          ];

        const getRandomNumberSign =
          numberSignArray[Math.floor(Math.random() * numberSignArray.length)];

        const getRandomSpecialSign =
          specialSignArray[Math.floor(Math.random() * specialSignArray.length)];

        //  console.log(getRandomPasswordSign);

        generateNewPasswortArray.push(getRandomLowerCaseSign);
        generateNewPasswortArray.push(getRandomUpperCaseSign);
        generateNewPasswortArray.push(getRandomNumberSign);
        generateNewPasswortArray.push(getRandomSpecialSign);

        /*setGeneratePasswortArray((prevRandomArray) => [
        ...prevRandomArray,
        getRandomPasswordSign,
      ]);*/
        //newGeneratePasswortArray.push(getRandomPasswordSign);
        console.log(generateNewPasswortArray);
      }

      if (generateNewPasswortArray.length === Number(lengthOfSpecialPassword)) {
        setShowNewPassword(generateNewPasswortArray.join(""));
        generateNewPasswortArray = [];
        setLengthOfSpecialPassword("");
      }
    } else {
      setSpecialPasswordNote(true);
    }
  }

  return (
    <div className="service-div">
      <h2 className="service-div__headline">Dienstleistungen</h2>

      <div className="service-div__password-generator">
        {specialPasswordNote && (
          <div className="windows-pop-up-main-div">
            <div className="windows-pop-up-message-div">
              Das Passwort sollte mindestens 8 Zeichen (Stellen) haben.
              <button
                onClick={() => setSpecialPasswordNote(false)}
                className="close-button button"
              >
                Okay
              </button>
            </div>
          </div>
        )}
        <h1 className="service-div__password-generator__headline">
          Passwortgenerator <br />{" "}
          <span className="service-div__password-generator__special-sign">
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />
            <StarSignComponent />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="service-div__password-generator__lock-sign"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>{" "}
        </h1>
        <p className="service-div__password-generator__output">
          Das neue Passwort heißt:{" "}
          <span className="service-div__password-generator__password">
            {showNewPassword}
          </span>
        </p>{" "}
        <div className=" service-div__password-generator__main-div">
          <div className="service-div__password-generator__generally-password-div">
            <button
              onClick={generatePassword}
              className="service-div__password-generator__create-generally-password button"
            >
              Passwort mit 8 Zeichen erstellen
            </button>{" "}
          </div>

          <div className="service-div__password-generator__special-password-div">
            <p>Wie viele Zeichen (Stellen) soll dein Passwort haben?</p>
            <div className="service-div__password-generator__input-and-button-div">
              <input
                type="number"
                name=""
                placeholder="z.B.: 10, 15"
                onChange={(event) => {
                  setLengthOfSpecialPassword(event.target.value);
                }}
                value={lengthOfSpecialPassword}
              />
              <button
                onClick={generateSpecialPassword}
                className="create-special-password button"
              >
                Passwort erstellen
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
