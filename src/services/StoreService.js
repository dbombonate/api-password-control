import Store from '../models/Store';

export default class StoreService {
  async list() {
    try {
      const storesList = await Store.findAll();

      return storesList;
    } catch (error) {
      throw new Error('Erro ao buscar na base de dados');
    }
  }

  async listById(param) {
    const { id } = param;
    try {
      const store = await Store.findByPk(id);

      return store;
    } catch (error) {
      throw new Error('Erro ao buscar na base de dados');
    }
  }

  async create(body) {
    try {
      const store = await Store.create(body);
      return store;
    } catch (error) {
      throw new Error('Erro ao gravar na base de dados');
    }
  }

  async delete(param) {
    try {
      const { id } = param;
      const deleted = await Store.destroy({
        where: {
          store_id: id,
        },
      });
      return deleted;
    } catch (error) {
      throw new Error('Erro ao remover na base de dados');
    }
  }

  async update(param, body) {
    try {
      const { id } = param;
      const updated = await Store.update({ store_name: body.store_name }, {
        where: {
          store_id: id,
        },
      });
      return updated;
    } catch (error) {
      throw new Error('Erro ao atualizar na base de dados');
    }
  }
}
