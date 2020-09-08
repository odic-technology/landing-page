const initialValue = { isMenuOpen: false }

function globalReducer (state, action) {
  switch (action.type) {
    case 'set_is_open':
      return { isMenuOpen: action.payload.isMenuOpen, ...state }
    default:
      throw new Error()
  }
}

export { globalReducer, initialValue }
