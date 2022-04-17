import Password from '../models/Password';
import NewPasswordService from './NewPasswordService';

export default class CreatePasswordService {
  async create(body) {
    const { password_priority, dept_id } = body;

    const generatePassword = new NewPasswordService();
    const password = generatePassword.generate(password_priority);

    const savedPassword = await Password.create({
      password,
      password_priority,
      dept_id,
    });

    if (!savedPassword) {
      throw new Error('Something went wrong during saving on Database');
    }

    return savedPassword;
  }
}
