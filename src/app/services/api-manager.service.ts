import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UserShortInfo } from '../models/UserShortInfo'
import { UserInfo } from '../models/UserInfo'
import { UserMessage } from '../models/Message'

const apiEndpoint = 'http://localhost:12345/api'

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  constructor(private http: HttpClient) {
  }

  getUsersList(): Promise<UserShortInfo[]> {
    return this.http.get(`${apiEndpoint}/users`)
      .toPromise()
      .then(data => Promise.resolve(<UserShortInfo[]>data))
  }

  getUserInfo(userId: string): Promise<UserInfo> {
    return this.http.get(`${apiEndpoint}/user/${userId}`)
      .toPromise()
      .then(data => Promise.resolve(<UserInfo>data))
  }

  getUserMessages(userId: string): Promise<UserMessage[]> {
    return this.http.get(`${apiEndpoint}/user/${userId}/messages`)
      .toPromise()
      .then(data => {
        if (Array.isArray(data)) {
          for (let index = 0; index < data.length; index++) {
            data[index].dt = new Date(data[index].dt)
          }
          return Promise.resolve(<UserMessage[]>data)
        }
      })
  }

  saveMessage(msg: UserMessage, userId: string): Promise<any> {
    return this.http.post(`${apiEndpoint}/user/${userId}/messages`, msg)
      .toPromise()
      .then(() => Promise.resolve())
  }


}


