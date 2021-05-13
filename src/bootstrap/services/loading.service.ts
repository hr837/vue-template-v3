import { ExtendService, RequestParams } from "@gopowerteam/http-request";
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
	public before = (requestParam: RequestParams) => {
		this.subscriber.next(true);

		if (requestParam.options.loading) {
			this.timeout = window.setTimeout(() => {
				this.after();
			}, appConfig.server.timeOut);
		}
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
