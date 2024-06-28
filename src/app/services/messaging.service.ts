import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
// import { take } from 'rxjs/operators';

// const INIT_DATA = [];

@Injectable({ providedIn: 'root' })
export class MessagingService {
    baseURL = environment.notificationURL;
    currentMessage = new BehaviorSubject(null);
    // private messageList = new BehaviorSubject(INIT_DATA);
    // msgList$: Observable<any> = this.messageList.asObservable();

    subscription;

    constructor(
        private angularFireMessaging: AngularFireMessaging,
        private http: HttpClient
    ) {
        this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        );
    }

    requestPermission_old() {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                // console.log('token::', token);
            },
            (err) => {
                // console.error('Unable to get permission to notify.', err);
            }
        );
    }

    receiveMessage() {
        this.subscription = this.angularFireMessaging.messages.subscribe(
            (payload: any) => {
                // console.log('new message received. ', payload);
                this.currentMessage.next(payload);
                // this.messageList.next(this.messageList.getValue().concat(payload));
                // this.addNotificationToObservableArray(payload.notification);
            });
    }

    requestPermission(): Observable<any> {
        return this.angularFireMessaging.requestToken;
    }

    registerToken(token, topics): any {
        const url = this.baseURL + apiUrls.registerToken;
        const payload = {
            token,
            topics
        };
        // console.log('registerToken-payload::', payload);
        return this.http.post(url, payload).toPromise();
    }

    sendNotification(userId, title, body): any {
        const url = this.baseURL + apiUrls.sendNotification;
        const payload = {
            title, body,
            topics: ['uId_' + userId]
        };
        // console.log('sendNotification-payload::', payload);
        return this.http.post(url, payload).toPromise();
    }

    findTop5Notification(userId): Observable<any> {
        const url = this.baseURL + apiUrls.findTop5Notification + '?userId=' + userId;
        return this.http.get(url);
    }

    unsubscribeTopics(token, topics): Observable<any> {
        const url = this.baseURL + apiUrls.unsubscribeTopics;
        const payload = {
            token,
            topics
        };
        return this.http.post(url, payload);
    }

    updateIsReadNotification(userId): Observable<any> {
        const url = this.baseURL + apiUrls.updateIsReadNotification + '?userId=' + userId;
        return this.http.get(url);
    }

    // stopReceivingMessages() {
    //     console.log('stopReceivingMessages');
    //     this.subscription.unsubscribe();
    // }

    // addNotificationToObservableArray(item) {
    //     this.msgList$.pipe(take(1)).subscribe(val => {
    //         console.log(val);
    //         const newArr = [item, ...val];
    //         this.messageList.next(newArr);
    //     });
    // }

    // loadLast5Msgs(msgs) {
    //     this.messageList.next(msgs);
    // }
}