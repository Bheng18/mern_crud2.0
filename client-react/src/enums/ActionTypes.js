const ActionTypes = {
    Contact: {
      GET_CONTACT: "@@action/GET_CONTACT",
      SELECT_CONTACT: "@@action/SELECT_CONTACT",
      // UPDATE_CONTACT: "@@action/UPDATE_CONTACT",
      GET_CITY_LIST: "@@action/GET_CITY_LIST",
      GET_BARANGAY_LIST: "@@action/GET_BARANGAY_LIST",
    },
    Segments: {
      GET_SEGMENTS: "@@action/GET_SEGMENTS",
      SELECT_SEGMENTS: "@@action/SELECT_SEGMENTS",
      GET_CITY_LIST: "@@action/GET_CITY_LIST",
      GET_BARANGAY_LIST: "@@action/GET_BARANGAY_LIST"
    },
    UI: {
      SHOW_LOADING: "@@action/ui/SHOW_LOADING",
      HIDE_LOADING: "@@action/ui/HIDE_LOADING",
      TEST: "@@action/ui/TEST_LOADING",
      START_PROCESS: "@@action/ui/START_PROCESS",
      END_PROCESS: "@@action/ui/END_PROCESS",
      SET_MENU_ITEMS: "@@action/ui/SET_MENU_ITEMS",
      SHOW_MESSAGE_BOX: "@@action/ui/SHOW_MESSAGE_BOX",
      HIDE_MESSAGE_BOX: "@@action/ui/HIDE_MESSAGE_BOX",
      SHOW_SNACKBAR: "@@action/ui/SHOW_SNACKBAR",
      SHOW_SETTINGS: "@@action/ui/SHOW_SETTINGS",
      HIDE_SETTINGS: "@@action/ui/HIDE_SETTINGS",
      SHOW_USER_GUIDES: "@@action/ui/SHOW_USER_GUIDES",
      HIDE_USER_GUIDES: "@@action/ui/HIDE_USER_GUIDES",
      CLEAR_UI: "@@action/ui/CLEAR_UI"
    }
  };
  
  export default ActionTypes;
  