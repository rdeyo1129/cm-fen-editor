/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * License: MIT, see file 'LICENSE'
 */

const LibraryManager = require("cm-web-modules/src/LibraryManager.js")
const manager = new LibraryManager(__dirname)

manager.addProject("cm-web-modules")
manager.addProject("cm-chessboard")
manager.addProject("cm-chess")
manager.addProject("cm-pgn")
