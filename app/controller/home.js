'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getGJCD() {
    const { ctx } = this;
    const connection = await this.app.oracle.getConnection();
    const result = await connection.execute('SELECT * from VIEW_GJCD');
    connection.close();
    if (result.rows.length > 0) {
      ctx.body = {
        code: '200',
        des: '查询成功',
        data: result
      }
    } else {
      ctx.body = {
        code: '500',
        des: '查询失败',
      }
    }
  }
}

module.exports = HomeController;
