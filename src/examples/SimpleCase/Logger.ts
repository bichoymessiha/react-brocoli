/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 * 
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
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
