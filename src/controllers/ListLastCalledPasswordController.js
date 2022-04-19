import ListLastCalledPasswordService from '../services/ListLastCalledPasswordService';

class ListLastCalledPasswordController {
  async handle(req, res) {
    /*
      #swagger.description = 'Route to list last called password.'
    */
    const listLastCalledPasswordService = new ListLastCalledPasswordService();

    const lastPasswordCalled = await listLastCalledPasswordService.list();

    return res.status(200).send(lastPasswordCalled);
  }
}

export default new ListLastCalledPasswordController();
