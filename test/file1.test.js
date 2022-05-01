import { jest } from '@jest/globals';
import {mockModuleESM} from './help.js'
describe('Test ', () => {

    beforeEach( () => {
        jest.resetModules()
        jest.restoreAllMocks()
    });

    test('should return mock1111', async () => {
        await mockModuleESM(`../src/file2`, [
            {
                name: 'foo2',
                value: {result:"foo2 mock1111"}
            }
        ]);

        const { foo1 } = await import(
            `../src/file1.js`
            );
    const r = await foo1()
        expect(r).toEqual({result:"foo2 mock1111"});

    });

    test('should return mock2222', async () => {

        await mockModuleESM(`../src/file2`, [
            {
                name: 'foo2',
                value: {result:"foo2 mock2222"}
            }
        ]);

        const { foo1 } = await import(
            `../src/file1.js`
            );

        const r = await foo1()
        expect(r).toEqual({result:"foo2 mock2222"});
        console.log("END 22222")
    });


});
