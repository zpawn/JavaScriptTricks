const removeDuplicateItems = arr => [...new Set(arr)];

removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);
//=> [42, "foo", true]
