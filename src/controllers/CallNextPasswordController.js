import CallNextPasswordService from '../services/CallNextPasswordService';

class CallNextPasswordController {
  async handle(req, res) {
    const callNextPasswordService = new CallNextPasswordService();

    const passwordCalled = await callNextPasswordService.callNext();

    return res.status(200).send(passwordCalled);
  }
}

export default new CallNextPasswordController();
