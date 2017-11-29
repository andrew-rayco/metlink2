import * as chai from 'chai';
import server from '../utils/server.mock';
import constants from '../../app/config/constants';

const expect = chai.expect;

describe('GET /', () => {
  describe('#200', () => {
    it('should return html', (done) => {
      server.get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.type).to.eql('text/html');
          done();
        });
    });

    it('should return metlink data', (done) => {
      server.get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Wadestown');
          done();
        });
    });
  });
});
