/**
 * @module WebRequest
 */

declare interface WebRequest {
    /** Download percentage, represented as a number in the range 0-1. */
    download_progress: float;

    /**
     * Reason why the request failed to complete.
     *
     * If the server responds with a HTTP status code that represents a HTTP error (4xx/5xx), this is not considered a request error.
     */
    error: string;

    /** If the request failed due to an error. */
    is_error: boolean;

    /**
     * If the request completed or failed.
     *
     * If the request failed, is_error will be set.
     */
    is_done: boolean;

    /** Response HTTP status code. */
    response_code: int;

    /** Response body. */
    text: string;

    /** Upload percentage, represented as a number from 0-1. */
    upload_progress: float;

    /**
     * The request's target URL.
     *
     * If the request was redirected, this will still return the initial URL.
     */
    url: string;

    /**
     * Web requests are automatically disposed of after a request completes/fails.
     *
     * You may call this method to *try* to abort a request and dispose of it early.
     */
    dispose(): void;

    /**
     * Returns the value of the specified response header, or nil if no such header exists.
     *
     * @param header Name of the header.
     */
    getResponseHeader(header: string): Maybe<string>;

    /**
     * Returns the table of response headers. Keys and values are both .
     */
    getResponseHeaders(): WebRequestHeaders;
}

declare interface WebRequestManager {
    /**
     * Performs a HTTP request using the specified method, data and headers.
     *
     * Returns a Web Request Instance.
     *
     * @param url The URL.
     * @param method The HTTP method.
     * @param download Whether you want to handle the response body.
     *                 Must be true if you intend to read the response text.
     * @param data The request body.
     * @param headers Table of request headers.
     *                The table's keys and values must both be .
     * @param callback Called when the request completes (or fails).
     *                 Passed the Web Request Instance.
     */
    custom(
        url: string,
        method: string,
        download: boolean,
        data?: string,
        headers?: WebRequestHeaders,
        callback?: WebRequestCallback
    ): WebRequest;
}

type WebRequestHeaders = LuaTable<string, string>;
type WebRequestCallback = (request: WebRequest) => unknown;

/**
 * WebRequest is a static global class which allows you to send HTTP web request, from the game host's computer only.
 */
declare const WebRequest: WebRequestManager;
