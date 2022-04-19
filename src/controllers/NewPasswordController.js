import CreatePasswordService from '../services/CreatePasswordService';

class CreatePasswordController {
  async handle(req, res) {
    /*
      #swagger.description = 'Route to create new password.'
    */

    /*
      #swagger.parameters['password_priority'] = {
	    description: 'Indicate password priority',
      type: 'boolean',
      required: false,
      in: 'body',
      example: 'password_priority: true',
      }

      #swagger.parameters['dept_id'] = {
	    description: 'Inform this to send the department id',
      type: 'number',
      required: false,
      in: 'body',
      example: 'dept_id: 1',
      }

    */

    const createPasswordService = new CreatePasswordService();

    const password = await createPasswordService.create(req.body);

    if (!password) {
      throw new Error('Something is wrong when consulting Database.');
    }

    return res.send(password);
  }
}

export default new CreatePasswordController();
