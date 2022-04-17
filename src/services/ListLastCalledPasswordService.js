import Password from '../models/Password';

export default class ListLastCalledPasswordService {
  async list() {
    const lastPasswordCalled = Password.findOne({
      where: {
        password_status: true,
      },
      order: [['password_called', 'DESC']],
    });

    if (!lastPasswordCalled) {
      throw new Error('Something is wrong when consulting Database.');
    }
    return lastPasswordCalled;
  }
}
