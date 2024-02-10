export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Naufal Husnianto'})
    }, 2000)
};