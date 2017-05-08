/**
 * Created by korman on 01.05.17.
 */

export default class Config
{
    constructor() {
        this._baseUrl = 'http://dev.kankan/app_dev.php/';
        this._baseImagesPath = 'http://dev.kankan/';
    }

    get baseUrl() {
        return this._baseUrl;
    }

    get baseImagePath() {
        return this._baseImagesPath;
    }
}