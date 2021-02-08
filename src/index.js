import dayjs from "dayjs";
import _ from "lodash";

let today = dayjs().format("MM/DD/YY");

console.log(today);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
