/*
 * Copyright (c) 2018 - Indigen Solutions
 * Authors:
 *   - Bichoy Messiha <bm@indigen.com>
 * NOTICE: All information contained here in is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Indigen Solutions.
 */
import { Injectable } from "depints";

@Injectable()
export class Logger {
    public log(tag: string, arg0: any, ...args: any[]) {
        window.console.log("LOG:", `[${tag}]`, arg0, ...args);

        return this;
    }

    public debug(tag: string, arg0: any, ...args: any[]) {
        window.console.debug("DEBUG:", `[${tag}]`, arg0, ...args);
        return this;
    }

    public info(tag: string, arg0: any, ...args: any[]) {
        window.console.info("INFO:", `[${tag}]`, arg0, ...args);
        return this;
    }

    public error(tag: string, arg0: any, ...args: any[]) {
        window.console.error("ERROR:", `[${tag}]`, arg0, ...args);
        return this;
    }
}
