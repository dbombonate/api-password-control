import StoreService from '../services/StoreService';

const storeService = new StoreService();

class StoreController {
  async index(req, res) {
    const storeList = await storeService.list();
    return res.status(200).send({ storeList });
  }

  async show(req, res) {
    const id = req.params;
    const store = await storeService.listById(id);
    return res.status(200).send({ store });
  }

  async store(req, res) {
    const createStore = await storeService.create(req.body);
    return res.status(200).send({ createStore });
  }

  async delete(req, res) {
    const id = req.params;
    const deleteStore = await storeService.delete(id);

    if (deleteStore === 1) {
      return res.status(200).send({ msg: 'Store deleted' });
    }

    return res.status(400).send({ msg: 'No store deleted' });
  }

  async update(req, res) {
    const id = req.params;
    const updateStore = await storeService.update(id, req.body);

    if (updateStore === 1) return res.status(200).send({ updateStore });

    return res.status(400).send({ msg: 'No store updated' });
  }
}

export default new StoreController();
