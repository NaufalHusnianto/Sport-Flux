 // inisialisasi state
 const initialState = {
    popup: false,
    isLogin: false,
    user: 'Naufal',
  };
  
  // reducer = kumpulan instruksi untuk mengubah store
  const reducer = (state=initialState, action) => {
    if(action.type === 'CHANGE_POPUP'){
      return {
        // titik 3 untuk mencopy nilai state awal kemudian baru dirubah
        ...state,
        popup: action.value
      };
    };

    if(action.type === 'CHANGE_ISLOGIN'){
      return {
        ...state,
        isLogin: action.value
      }
    };

    if(action.type === 'CHANGE_USER'){
      return {
        ...state,
        user: action.value
      };
    };
    
    return state;
  };

export default reducer;