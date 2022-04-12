import DepartmentService from '../services/DepartmentService';

const departmentService = new DepartmentService();

class DepartmentController {
  async index(req, res) {
    const departmentList = await departmentService.list();
    return res.status(200).send({ departmentList });
  }

  async show(req, res) {
    const department = await departmentService.listById(req.params);

    return res.status(200).send({ department });
  }

  async store(req, res) {
    const department = req.body;

    const newDepartment = await departmentService.create(department);

    return res.status(200).send({ newDepartment });
  }

  async delete(req, res) {
    const id = req.params;
    const deleteDepartment = await departmentService.delete(id);

    if (deleteDepartment === 1) {
      return res.status(200).send({ msg: 'Department deleted' });
    }

    return res.status(400).send({ msg: 'No department deleted' });
  }

  async update(req, res) {
    const id = req.params;
    const updateDepartment = await departmentService.update(id, req.body);

    if (updateDepartment === 1) return res.status(200).send({ updateDepartment });

    return res.status(400).send({ msg: 'No department updated' });
  }
}

export default new DepartmentController();
