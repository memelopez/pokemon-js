// src/modules/store

export default class Store {
  // gets tasks from storage and returns an array of objects
  static getAppID() {
    let appId;
    if (localStorage.getItem('appId') !== null) {
      appId = JSON.parse(localStorage.getItem('appId'));
    }
    return appId;
  }

  static setAppID(id) {
    localStorage.setItem('appId', JSON.stringify(id));
  }
}