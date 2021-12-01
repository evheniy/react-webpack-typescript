import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());

export default (...pathSegments: string[]): string => resolve(appDirectory, ...pathSegments);
