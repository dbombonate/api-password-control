import Department from '../models/Department';
import Store from '../models/Store';

export default class DepartmentService {
  async list() {
    try {
      const deptsList = await Department.findAll({ include: Store });

      return deptsList;
    } catch (error) {
      throw new Error('Erro ao buscar na base de dados');
    }
  }

  async listById(param) {
    try {
      const { id } = param;

      const department = await Department.findByPk(id, { include: Store });
      return department;
    } catch (error) {
      throw new Error('Erro ao buscar na base de dados');
    }
  }

  async create(dept) {
    try {
      const { store_id, dept_name } = dept;

      if (await Department.findOne({
        where: {
          store_id,
          dept_name,
        },
      })) return { msg: 'Department already exists' };

      const newDepartment = await Department.create(dept);

      return newDepartment;
    } catch (error) {
      throw new Error('Erro ao gravar na base de dados');
    }
  }

  async delete(param) {
    try {
      const { id } = param;
      const deleted = await Department.destroy({
        where: {
          id,
        },
      });

      return deleted;
    } catch (error) {
      throw new Error('Erro ao remover na base de dados');
    }
  }

  async update(param, body) {
    try {
      const { id } = param;
      const updated = await Department.update({ dept_name: body.dept_name }, {
        where: {
          id,
        },
      });
      return updated;
    } catch (error) {
      throw new Error('Erro ao atualizar na base de dados');
    }
  }
}
