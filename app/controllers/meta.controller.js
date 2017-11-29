import BaseController from './base.controller';
import request from 'superagent';

class MetaController extends BaseController {
  index(req, res) {
    request
      .get('https://www.metlink.org.nz/api/v1/ServiceLocation/14')
      .end((err, result) => {
        if (err) {
          result.send('Oh no! Error:');
        } else {
          res.send(result.body);
        }
      });
	}
}

export default new MetaController();
