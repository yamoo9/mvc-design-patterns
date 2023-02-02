import CarModel from './mvc/model.js';
import { CarListView, CarView } from './mvc/view.js';
import CarClickerController from './mvc/controller.js';

const carModel = new CarModel();
const carListView = new CarListView();
const carView = new CarView();

const carClickerController = new CarClickerController();

carClickerController.addModel(carModel);
carClickerController.addView('carListView', carListView);
carClickerController.addView('carView', carView);
carClickerController.run();
