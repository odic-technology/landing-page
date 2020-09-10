const initialState = {
  isMenuOpen: false
}

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_is_menu_open':
      return {
        ...state,
        isMenuOpen: action.isMenuOpen
      }
    default:
      return state
  }
}
