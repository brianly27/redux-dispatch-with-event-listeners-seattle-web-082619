// add code snippets from README
let state = { count: 0 };

reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    case "@@INIT":
      return { count: 0 };
    default:
      return state;
  }
};

dispatch = action => {
  state = reducer(state, action);
  render();
};

render = () => {
  let container = document.getElementById("container");
  container.textContent = state.count;
};

dispatch({ type: "@@INIT" });

let button = document.getElementById("button");

button.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});
