import Password from '../models/Password';

export default class CallNextPasswordService {
  async callNext() {
    const calledDate = new Date();

    const queuePriorityPassword = await Password.findAll({
      where: {
        password_status: false,
        password_priority: true,
      },
    });

    const queueNormalPassword = await Password.findAll({
      where: {
        password_status: false,
        password_priority: false,
      },
    });

    if (queueNormalPassword.length === 0 && queuePriorityPassword.length === 0) {
      throw new Error('No password to call');
    }

    // Check length of arrays to determine the queue to call
    let callNextPassword = ((queueNormalPassword.length - queuePriorityPassword.length) < 5)
      ? queuePriorityPassword[0] : queueNormalPassword[0];

    // Check if queue priority is zero and change the queue to call
    callNextPassword = (queuePriorityPassword.length === 0) ? queueNormalPassword[0]
      : callNextPassword;

    await Password.update({
      password_status: true,
      password_called: calledDate,
    }, {
      where: {
        id: callNextPassword.id,
      },
    });

    return callNextPassword;
  }
}
