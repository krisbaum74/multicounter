export const addCounter = payload => ({
  type: "addCounter",
  payload
});

export const removeCounter = payload => ({
  type: "removeCounter",
  payload
});

export const showAlert = payload => ({
  type: "showAlert",
  payload
})

export const hideAlert = () => ({
  type: "hideAlert"
})