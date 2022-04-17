export default class NewPasswordService {
  generate(passwordPriority) {
    let passwordInd = 'N';
    if (passwordPriority) {
      passwordInd = 'P';
      const password = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;

      return passwordInd + password;
    }

    const password = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;

    return passwordInd + password;
  }
}
