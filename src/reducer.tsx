export const initialState = {
  basket: [
    {
      id: "1212121212",
      title: "I am learning programming ",
      price: 11.96,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
    },
    {
      id: "1212121212",
      title: "I am learning programming ",
      price: 11.96,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
    }
  ],
  user: null
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert(`cant remove product (id: ${action.id}) as its not in basket`);
      }
        return {...state, basket:newBasket}
      break;
    default:
      return state;
  }
}

export default reducer;
