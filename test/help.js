import { jest } from '@jest/globals';

//The function should clone the module and mock only the functions that need to be mocked.
// I have some functions I want to mock and some I don't want to mock in a larger project's module.
export const mockModuleESM = async (modulePath,funcToReturnValMock) => {
    const module = await import(modulePath);
    const newModule = {};
    for (const propKey of Object.keys(module)) {
        let i = funcToReturnValMock.findIndex(
            keyVal => keyVal.name === propKey
        );

        newModule[propKey] =
            i === -1
                ? module[propKey] //function that should not be cloned
                : jest.fn().mockImplementation(() => {
                    return funcToReturnValMock[i].value;
                });
    }

    return jest.unstable_mockModule(modulePath, async () => {
        return newModule;
    });
};
