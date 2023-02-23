import { axiosClient } from '@/data/client/client';
import {
    StudentProfileResponse,
} from './account.dto';

class AccountApiService {
    private static instance: AccountApiService;
    static get Instance(): AccountApiService {
        return this.instance || (this.instance = new this());
    }

    async getStudentProfile(parentEmail: string): Promise<StudentProfileResponse[]> {

        var param = { 
            parent_email : parentEmail
        };
        //console.log('getStudentProfile param', param);
        const response = await axiosClient.post(`/account/student`, param);
        //console.log('getStudentProfile response', response);
        return response.data;
    }
}

export default AccountApiService.Instance;
