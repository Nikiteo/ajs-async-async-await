import json from '../Parser/parser.js';
import read from '../Reader/reader.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return await json(data);
    } catch (e) {
      return new Error(`Error - reject ${e}`);
    }
  }
}
