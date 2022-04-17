import CreatePasswordService from '../services/CreatePasswordService';

class CreatePasswordController {
  async handle(req, res) {
    const createPasswordService = new CreatePasswordService();

    const password = await createPasswordService.create(req.body);

    return res.send(password);
  }
}

export default new CreatePasswordController();
