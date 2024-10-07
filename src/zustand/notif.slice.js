const notificationSlice = (set) => ({
  openEnabled: true,
  setOPenModal: () => set((state) => {
    console.log(state)
    return { openEnabled: !state.openEnabled };
  }),
});

export default notificationSlice;
