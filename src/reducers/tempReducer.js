const initialState = {
  title: "My App",
  friends: [{ id: 1, name: "Kenshin" }, { id: 2, name: "Jedi" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
