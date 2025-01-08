import { ApiResult } from "../infrastructures/models";

export interface GetAllAsync<T> {
    getAll(url: string): Promise<T>
}

export interface GetAllResult extends GetAllAsync<ApiResult>{

}