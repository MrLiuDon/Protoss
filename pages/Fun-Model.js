import { Base } from '../utils/base.js';

class funmodel extends Base {
  constructor() {
    super();
  }

  accWebserver(speInPut) {
    var param = {
      url: 'test/' + speInPut +'?XDEBUG_SESSION_START=14729',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}
export { funmodel };