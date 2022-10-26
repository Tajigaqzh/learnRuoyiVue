/**
 * v-copyText 复制文本内容
 * Copyright (c) 2022 ruoyi
 */

export default {
	beforeMount(el, { value, args }) {
		if (args === "callback") {
			el.$copyCallback = value;
		} else {
			el.$copyValue = value;
			const handler = () => {};
		}
	},
};
