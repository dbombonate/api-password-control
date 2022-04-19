import DepartmentService from '../services/DepartmentService';

const departmentService = new DepartmentService();

class DepartmentController {
  async index(req, res) {
    /*
      #swagger.description = 'Route to list all departments.'
    */
    const departmentList = await departmentService.list();
    return res.status(200).send({ departmentList });
  }

  async show(req, res) {
    /*
      #swagger.description = 'Route to list specific department with ID.'
    */
    const department = await departmentService.listById(req.params);

    return res.status(200).send({ department });
  }

  async store(req, res) {
    /*
      #swagger.description = 'Route to create a new department.'
    */
    const department = req.body;

    const newDepartment = await departmentService.create(department);

    return res.status(200).send({ newDepartment });
  }

  async delete(req, res) {
    /*
      #swagger.description = 'Route to delete a specific department with ID.'
    */
    const id = req.params;
    const deleteDepartment = await departmentService.delete(id);

    if (deleteDepartment === 1) {
      return res.status(200).send({ msg: 'Department deleted' });
    }

    return res.status(400).send({ msg: 'No department deleted' });
  }

  async update(req, res) {
    /*
      #swagger.description = 'Route to update a specific department with ID.'
    */
    const id = req.params;
    const updateDepartment = await departmentService.update(id, req.body);

    if (updateDepartment === 1) return res.status(200).send({ updateDepartment });

    return res.status(400).send({ msg: 'No department updated' });
  }
}

export default new DepartmentController();
