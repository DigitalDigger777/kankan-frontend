/**
 * Created by korman on 01.05.17.
 */

export default class Config
{
    constructor() {
        this._baseUrl = 'http://dev.kankan/app_dev.php/';
    }

    get baseUrl() {
        return this._baseUrl;
    }
}