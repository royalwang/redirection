/**
 * Internal dependencies
 */

import { getInitialSettings } from 'state/settings/initial';
import { getInitialLog } from 'state/log/initial';
import { getInitialModule } from 'state/module/initial';

export function initialActions( store ) {
	return store;
}

export function getInitialState() {
	return {
		settings: getInitialSettings(),
		log: getInitialLog(),
		module: getInitialModule(),
	};
}
