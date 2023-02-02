class Model {
  data = null;

  constructor(initialData) {
    this.data = initialData;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}


class View {
  controller = null;

  constructor(controller) {
    this.addController(controller);
  }

  addController(controller) {
    this.controller = controller;
  }
}


class Controller {
  constructor(model) {
    this.addModel(model);
    this.views = {};
  }

  addModel(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  addView(key, view) {
    this.views[key] = view;
    this.views[key].addController?.(this);
  }

  getView(key) {
    return this.views[key];
  }
}


/**
 * Euid.Model = data
 * Euid.View = UI
 * Euid.Controller = Brain
 */
export default {
  Model,
  View,
  Controller,
};
