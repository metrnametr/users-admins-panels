const fetchDataStart = () => ({
    type: 'FETCH_DATA_START'
})

const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error
})

const fetchDataSuccess = (payload) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload
})

const fetchSettingStart = () => ({
    type: 'FETCH_SETTING_START'
})

const fetchSettingFailure = (error) => ({
    type: 'FETCH_SETTING_FAILURE',
    payload: error
})

const fetchSettingSuccess = (payload) => ({
    type: 'FETCH_SETTING_SUCCESS',
    payload
})
const fetchList = (localApi) => () => (dispatch) => {
    dispatch(fetchDataStart());
    localApi.getStorage('users')
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  };

const fetchSetting = (localApi) => () => (dispatch) => {
    dispatch(fetchSettingStart());
    localApi.getStorage('setting')
        .then( (data) => dispatch(fetchSettingSuccess(data)))
        .catch( (error) => dispatch(fetchSettingFailure(error)))
}

  export{
    fetchList,
    fetchSetting
  }