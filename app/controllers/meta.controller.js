import BaseController from './base.controller';
import Constants from '../config/constants';
import request from 'superagent'

class MetaController extends BaseController {
  index(req, res) {
    request
      .get('https://www.metlink.org.nz/api/v1/ServiceLocation/14')
      .end((err, result) => {
        if (err) {
          result.send('Oh no! Error:')
        } else {
          console.log(Object.keys(result))
          res.send(result.body)
        }
      })
		// res.json({
		// 	version: Constants.version,
		// });

	}
}

export default new MetaController();
