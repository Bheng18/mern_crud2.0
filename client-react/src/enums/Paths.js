const basePath = "/i2i";

const Paths = {
  BASE: basePath,

  //home
  HOME: `${basePath}/home`,
//   LOGIN: `${basePath}/login`,
//   RESET_PASSWORD: `${basePath}/resetPassword`,

  //others
  UNDER_CONSTRUCTION: `${basePath}/underConstruction`,
  //TEST: `${basePath}/testEndpoint`,

  //clients
  MANAGE_CLIENTS: `${basePath}/clients`,
  EDIT_CLIENT: `${basePath}/clients/edit`,
  ADD_CLIENT: `${basePath}/clients/add`,

  //bills payment
  BILLS_PAYMENT: `${basePath}/billsPayment`,

  //marketing automation
  CONTACT_DETAILS: `${basePath}/contactDetailsView`,
  CONTACT: `${basePath}/contactDetailsRow`, //mainView
  AUDIENCE: `${basePath}/contacts`,
  ADD_CONTACT: `${basePath}/contacts/add`,
  EDIT_CONTACT: `${basePath}/contacts/edit`,
  DASHBOARD: `${basePath}/dashboard`,


  //segments
  SEGMENTS: `${basePath}/segments`,
  SEGMENTS_LIST: `${basePath}/segments/list`,
  ADD_SEGMENTS: `${basePath}/segments/add`,
  EDIT_SEGMENTS: `${basePath}/segments/edit`,
  DELETE_SEGMENTS: `${basePath}/segments/delete`,

  //items
  ITEMS: `/`,
  EDIT_ITEM: `${basePath}/item/edit`
};

export default Paths;
