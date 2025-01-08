import { ApiResult } from "./models";
import {GetAllAsync} from "../applicatifs/get-all-result"

export abstract class GetAll<T> implements GetAllAsync<T> {
    async getAll(url: string): Promise<T> {
        const response = await fetch(url)
        const result = await response.json()

        return result;
    }    
}

export class GetAllPeopleInfra extends GetAll<ApiResult> {
}

type ApiResultPlus = ApiResult & { url: string }

export class GetAllPeopleExtraInfra extends GetAll<ApiResultPlus> {
}


export class GetAllFooExtraInfra extends GetAll<unknown> {
}

