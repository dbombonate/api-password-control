import CreatePasswordService from '../services/CreatePasswordService';

class CreatePasswordController {
  async handle(req, res) {
    const data = req.body;

    const createPasswordService = new CreatePasswordService();

    const password = await createPasswordService.create(data);

    return res.send(password);
  }
}

export default new CreatePasswordController();
