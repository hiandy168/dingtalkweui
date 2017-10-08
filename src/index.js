import 'weui';
import Alert from './components/alert';
import Confirm from './components/confirm';
import Loading from './components/loading';
import Actionsheet from './components/actionsheet';
import Modal from './components/modal';
import PreviewImage from './components/previewImage';

import {getPlatform} from './utils/dom';

const dingtalkweui = {
	
}


const install = function (Vue, opts = {}) {
	Object.keys(opts).forEach((key) => {
		Vue.prototype[key] = opts[key];
	})
	
	if(getPlatform()) {
		Vue.prototype.platform = getPlatform();
	}

    Object.keys(dingtalkweui).forEach((key) => {
        Vue.component(key, dingtalkweui[key]);
    });

    Vue.prototype.$alert = Alert;
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$loading = Loading;
    Vue.prototype.$actionsheet = Actionsheet;
    Vue.prototype.$modal = Modal;
    Vue.prototype.$previewImage = PreviewImage;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(dingtalkweui, {install});  