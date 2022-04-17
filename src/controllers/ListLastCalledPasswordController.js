import ListLastCalledPasswordService from '../services/ListLastCalledPasswordService';

class ListLastCalledPasswordController {
  async handle(req, res) {
    const listLastCalledPasswordService = new ListLastCalledPasswordService();

    const lastPasswordCalled = await listLastCalledPasswordService.list();

    return res.status(200).send(lastPasswordCalled);
  }
}

export default new ListLastCalledPasswordController();
