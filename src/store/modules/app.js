import { defineStore } from "pinia";

import Cookies from "js-cookie";

const useAppStore = defineStore("app", {
	state: () => ({
		device: "desktop",
		// 设备
		size: Cookies.get("size") || "default",
		// 尺寸
		sideBar: {
			// 侧边栏
			opened: Cookies.get("sidebarStatus")
				? !!+Cookies.get("sidebarStatus")
				: true,
			//是否展开
			withoutAnimation: false,
			//是否带动画
			hide: false,
			//是否隐藏
		},
	}),

	actions: {
		/**
		 * 切换侧边栏,侧边栏如果打开cookie设置sidebarStatus为1，关闭则为0
		 * @param {boolean} withoutAnimation 是否带动画
		 * @returns
		 */
		toggleSideBar(withoutAnimation) {
			if (this.sideBar.hide) {
				//如果已经隐藏就返回false
				return false;
			}
			this.sidebar.opened = !this.sidebar.opened;
			this.sidebar.withoutAnimation = withoutAnimation;
			if (this.sidebar.opened) {
				Cookies.set("sidebarStatus", 1);
			} else {
				Cookies.set("sidebarStatus", 0);
			}
		},
		/**
		 * 关闭侧边栏设置sidebarStatus为0
		 * @param {boolean} withoutAnimation boolean是否带动画
		 */
		closeSideBar(withoutAnimation) {
			Cookies.set("sidebarStatus", 0);
			this.sidebar.opened = false;
			this.sidebar.withoutAnimation = withoutAnimation;
		},
		/**
		 * 切换设备
		 * @param {string} device
		 */
		toggleDevice(device) {
			this.device = device;
		},
		/**
		 * 设置大小
		 * @param {number} size
		 */
		setSize(size) {
			this.size = size;
			Cookies.set("size", size);
		},
		/**
		 * 切换侧边栏是否隐藏
		 * @param {0|1} status
		 */
		toggleSideBarHide(status) {
			this.sidebar.hide = status;
		},
	},
});
export default useAppStore;
