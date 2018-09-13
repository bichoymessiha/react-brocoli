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
import { Module } from "depints";
import { Logger } from "./Logger";

@Module("app")
export class AppModule {
    constructor(logger: Logger) {
        logger.log("AppModule", "constructor");
    }
}
