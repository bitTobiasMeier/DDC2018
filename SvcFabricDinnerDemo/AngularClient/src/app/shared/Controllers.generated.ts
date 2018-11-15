﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.20.1.0 (NJsonSchema v9.11.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IAdminClient {
    get(): Observable<Restaurant[] | null>;
    create(restaurant: Restaurant | null): Observable<Restaurant | null>;
}

@Injectable()
export class AdminClient implements IAdminClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    get(): Observable<Restaurant[] | null> {
        let url_ = this.baseUrl + "/api/Admin/Get";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<Restaurant[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Restaurant[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<Restaurant[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Restaurant.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Restaurant[] | null>(<any>null);
    }

    create(restaurant: Restaurant | null): Observable<Restaurant | null> {
        let url_ = this.baseUrl + "/api/Admin/Create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(restaurant);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<Restaurant | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Restaurant | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<Restaurant | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Restaurant.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Restaurant | null>(<any>null);
    }
}

export interface IOrderClient {
    create(order: Order | null): Observable<Order | null>;
    getOrder(orderId: string): Observable<Order | null>;
    getOrders(tableId: string): Observable<TableOrder[] | null>;
}

@Injectable()
export class OrderClient implements IOrderClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    create(order: Order | null): Observable<Order | null> {
        let url_ = this.baseUrl + "/api/Order";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(order);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<Order | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Order | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<Order | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Order | null>(<any>null);
    }

    getOrder(orderId: string): Observable<Order | null> {
        let url_ = this.baseUrl + "/api/Order/GetOrder/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetOrder(<any>response_);
                } catch (e) {
                    return <Observable<Order | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Order | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetOrder(response: HttpResponseBase): Observable<Order | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Order | null>(<any>null);
    }

    getOrders(tableId: string): Observable<TableOrder[] | null> {
        let url_ = this.baseUrl + "/api/Order/GetOrders/{tableId}";
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetOrders(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetOrders(<any>response_);
                } catch (e) {
                    return <Observable<TableOrder[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<TableOrder[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetOrders(response: HttpResponseBase): Observable<TableOrder[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(TableOrder.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<TableOrder[] | null>(<any>null);
    }
}

export interface IRestaurantAdminClient {
    getMenuCard(restaurantId: string): Observable<Dish[] | null>;
    addDish(restaurantId: string, dish: Dish | null): Observable<Dish | null>;
    createTable(restaurantId: string, table: RestaurantTable | null): Observable<RestaurantTable | null>;
    getTables(restaurantId: string): Observable<RestaurantTable[] | null>;
}

@Injectable()
export class RestaurantAdminClient implements IRestaurantAdminClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getMenuCard(restaurantId: string): Observable<Dish[] | null> {
        let url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetMenuCard(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetMenuCard(<any>response_);
                } catch (e) {
                    return <Observable<Dish[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Dish[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetMenuCard(response: HttpResponseBase): Observable<Dish[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Dish.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Dish[] | null>(<any>null);
    }

    addDish(restaurantId: string, dish: Dish | null): Observable<Dish | null> {
        let url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(dish);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddDish(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddDish(<any>response_);
                } catch (e) {
                    return <Observable<Dish | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Dish | null>><any>_observableThrow(response_);
        }));
    }

    protected processAddDish(response: HttpResponseBase): Observable<Dish | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Dish.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Dish | null>(<any>null);
    }

    createTable(restaurantId: string, table: RestaurantTable | null): Observable<RestaurantTable | null> {
        let url_ = this.baseUrl + "/api/RestaurantAdmin/CreateTable/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(table);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateTable(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateTable(<any>response_);
                } catch (e) {
                    return <Observable<RestaurantTable | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RestaurantTable | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreateTable(response: HttpResponseBase): Observable<RestaurantTable | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RestaurantTable | null>(<any>null);
    }

    getTables(restaurantId: string): Observable<RestaurantTable[] | null> {
        let url_ = this.baseUrl + "/api/RestaurantAdmin/GetTables/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTables(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTables(<any>response_);
                } catch (e) {
                    return <Observable<RestaurantTable[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RestaurantTable[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetTables(response: HttpResponseBase): Observable<RestaurantTable[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(RestaurantTable.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RestaurantTable[] | null>(<any>null);
    }
}

export interface IRestaurantClient {
    get(restaurantId: string): Observable<Restaurant | null>;
    getTable(restaurantId: string, tableId: string): Observable<RestaurantTable | null>;
}

@Injectable()
export class RestaurantClient implements IRestaurantClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    get(restaurantId: string): Observable<Restaurant | null> {
        let url_ = this.baseUrl + "/api/Restaurant/Get/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<Restaurant | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<Restaurant | null>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<Restaurant | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Restaurant.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Restaurant | null>(<any>null);
    }

    getTable(restaurantId: string, tableId: string): Observable<RestaurantTable | null> {
        let url_ = this.baseUrl + "/api/Restaurant/GetTable/{restaurantId}/{tableId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId)); 
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTable(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTable(<any>response_);
                } catch (e) {
                    return <Observable<RestaurantTable | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<RestaurantTable | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetTable(response: HttpResponseBase): Observable<RestaurantTable | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<RestaurantTable | null>(<any>null);
    }
}

export class Restaurant implements IRestaurant {
    name?: string | undefined;
    id!: string;

    constructor(data?: IRestaurant) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Restaurant {
        data = typeof data === 'object' ? data : {};
        let result = new Restaurant();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["id"] = this.id;
        return data; 
    }
}

export interface IRestaurant {
    name?: string | undefined;
    id: string;
}

export class Order implements IOrder {
    restaurantId!: string;
    orderId!: string;
    tableId!: string;
    dishId!: string;
    price!: number;
    orderTime?: Date | undefined;
    servedTime?: Date | undefined;
    orderState!: OrderState;

    constructor(data?: IOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.restaurantId = data["restaurantId"];
            this.orderId = data["orderId"];
            this.tableId = data["tableId"];
            this.dishId = data["dishId"];
            this.price = data["price"];
            this.orderTime = data["orderTime"] ? new Date(data["orderTime"].toString()) : <any>undefined;
            this.servedTime = data["servedTime"] ? new Date(data["servedTime"].toString()) : <any>undefined;
            this.orderState = data["orderState"];
        }
    }

    static fromJS(data: any): Order {
        data = typeof data === 'object' ? data : {};
        let result = new Order();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["restaurantId"] = this.restaurantId;
        data["orderId"] = this.orderId;
        data["tableId"] = this.tableId;
        data["dishId"] = this.dishId;
        data["price"] = this.price;
        data["orderTime"] = this.orderTime ? this.orderTime.toISOString() : <any>undefined;
        data["servedTime"] = this.servedTime ? this.servedTime.toISOString() : <any>undefined;
        data["orderState"] = this.orderState;
        return data; 
    }
}

export interface IOrder {
    restaurantId: string;
    orderId: string;
    tableId: string;
    dishId: string;
    price: number;
    orderTime?: Date | undefined;
    servedTime?: Date | undefined;
    orderState: OrderState;
}

export enum OrderState {
    None = 0, 
    Ordered = 1, 
    InKitchenQueue = 2, 
    Cooking = 3, 
    Cooked = 4, 
    Served = 5, 
    Payed = 6, 
}

export class TableOrder implements ITableOrder {
    orderId!: string;
    price!: number;
    servedAt?: Date | undefined;
    dish?: string | undefined;
    state?: string | undefined;

    constructor(data?: ITableOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.orderId = data["orderId"];
            this.price = data["price"];
            this.servedAt = data["servedAt"] ? new Date(data["servedAt"].toString()) : <any>undefined;
            this.dish = data["dish"];
            this.state = data["state"];
        }
    }

    static fromJS(data: any): TableOrder {
        data = typeof data === 'object' ? data : {};
        let result = new TableOrder();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["price"] = this.price;
        data["servedAt"] = this.servedAt ? this.servedAt.toISOString() : <any>undefined;
        data["dish"] = this.dish;
        data["state"] = this.state;
        return data; 
    }
}

export interface ITableOrder {
    orderId: string;
    price: number;
    servedAt?: Date | undefined;
    dish?: string | undefined;
    state?: string | undefined;
}

export class Dish implements IDish {
    name?: string | undefined;
    price!: number;
    id!: string;
    description?: string | undefined;
    imageUrl?: string | undefined;

    constructor(data?: IDish) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.price = data["price"];
            this.id = data["id"];
            this.description = data["description"];
            this.imageUrl = data["imageUrl"];
        }
    }

    static fromJS(data: any): Dish {
        data = typeof data === 'object' ? data : {};
        let result = new Dish();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["price"] = this.price;
        data["id"] = this.id;
        data["description"] = this.description;
        data["imageUrl"] = this.imageUrl;
        return data; 
    }
}

export interface IDish {
    name?: string | undefined;
    price: number;
    id: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
}

export class RestaurantTable implements IRestaurantTable {
    tablenr!: number;
    id!: string;

    constructor(data?: IRestaurantTable) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tablenr = data["tablenr"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): RestaurantTable {
        data = typeof data === 'object' ? data : {};
        let result = new RestaurantTable();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tablenr"] = this.tablenr;
        data["id"] = this.id;
        return data; 
    }
}

export interface IRestaurantTable {
    tablenr: number;
    id: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    return _observableThrow(new SwaggerException(message, status, response, headers, result));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}