import { ExtendService } from "@gopowerteam/http-request";
import appConfig from "@/config/app.config";
import { Observable, Observer } from "rxjs";

export class LoadingService extends ExtendService {
	public status: Observable<boolean>;

	public timeout?: number;

	public subscriber!: Observer<boolean>;

	constructor() {
		super();
		this.status = new Observable(
			(subscriber) => (this.subscriber = subscriber)
		);
	}

	/**
	 * 请求前置操作
	 */
	public before = () => {
		this.subscriber.next(true);

		// 清除超时操作
		if (this.timeout) {
			clearTimeout(this.timeout);
		}

		// 超时重置状态
		this.timeout = window.setTimeout(() => {
			this.subscriber.next(true);
		}, appConfig.server.timeOut);
	};

	/**
	 * 请求后置操作
	 */
	public after = () => {
		this.subscriber.next(false);

		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	};
}
