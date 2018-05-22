const obj = {
    foo: {
        bar: [11, 22, 33, 44],
        baz: { bing: true, boom: 'Hello' }
    }
};

/**
 * The third parameter is the number of spaces used to beautify the JSON output.
 */
JSON.stringify(obj, null, 4);
