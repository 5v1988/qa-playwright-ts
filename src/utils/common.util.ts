import * as fs from 'fs';
import * as yaml from 'yaml'

export const readTestConfig = async (key: string) => {
    let yamlFile: string = fs.readFileSync('src/data/config.yml', "utf8");
    let config = await yaml.parse(yamlFile);
    return config[key];
}

export const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
}