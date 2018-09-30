/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 * 
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
 */
import { Module } from "depints";

import { Logger } from "./Logger";

@Module("app")
export class AppModule {
    constructor(logger: Logger) {
        logger.log("AppModule", "constructor");
    }
}
