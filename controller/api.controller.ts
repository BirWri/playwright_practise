import {APIRequestContext, request} from '@playwright/test';

class APIController{

    private fakerApi: APIRequestContext;

    async init(){
        this.fakerApi = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    }

    async getUsers(){
        const response = await this.fakerApi.get('users');
        const responseBody = (await response.json());
        return responseBody[0];
    }

    async createUserToDo(requestBody){
        const postResponse = await this.fakerApi.post('users/1/todos', {
            data: requestBody
        });
        
        // return await postResponse.json()
        const postResponseBody = await postResponse.json()
        return postResponseBody
    }


}

export default new APIController;