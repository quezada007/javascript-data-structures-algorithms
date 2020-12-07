import HashTable from './separate-chaining-hash-table';

describe('Separate Chaining Hash Table', () => {
    test('inserting data to the Hash Table', () => {
        const ht = new HashTable();
        expect(ht.keyMap).toHaveLength(53);
        expect(ht.size).toEqual(0);
        ht.set('white', '#FFFFFF');
        expect(ht.keyMap[0]).toEqual([['white', '#FFFFFF']]);
        ht.set('black', '#000000');
        expect(ht.keyMap[4]).toEqual([['black', '#000000']]);
        ht.set('silver', '#C0C0C0');
        expect(ht.keyMap[9]).toEqual([['silver', '#C0C0C0']]);
        ht.set('gray', '#808080');
        expect(ht.keyMap[5]).toEqual([['gray', '#808080']]);
        ht.set('red', '#FF0000');
        expect(ht.keyMap[20]).toEqual([['red', '#FF0000']]);
        ht.set('maroon', '#800000');
        expect(ht.keyMap[12]).toEqual([['maroon', '#800000']]);
        ht.set('yellow', '#FFFF00');
        expect(ht.keyMap[3]).toEqual([['yellow', '#FFFF00']]);
        ht.set('olive', '#808000');
        expect(ht.keyMap[8]).toEqual([['olive', '#808000']]);
        ht.set('lime', '#00FF00');
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00']]);
        ht.set('green', '#008000');
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00'], ['green', '#008000']]);
        ht.set('aqua', '#00FFFF');
        expect(ht.keyMap[34]).toEqual([['aqua', '#00FFFF']]);
        ht.set('teal', '#008080');
        expect(ht.keyMap[19]).toEqual([['teal', '#008080']]);
        ht.set('blue', '#0000FF');
        expect(ht.keyMap[8]).toEqual([['olive', '#808000'], ['blue', '#0000FF']]);
        ht.set('navy', '#000080');
        expect(ht.keyMap[42]).toEqual([['navy', '#000080']]);
        ht.set('purple', '#800080');
        expect(ht.keyMap[48]).toEqual([['purple', '#800080']]);
        ht.set('fuchsia', '#FF00FF');
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00'], ['green', '#008000'], ['fuchsia', '#FF00FF']]);
        ht.set('white', '#FAFAFA');
        expect(ht.keyMap[0]).toEqual([['white', '#FAFAFA']]);
        ht.set('fuchsia', 'fuchsia');
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00'], ['green', '#008000'], ['fuchsia', 'fuchsia']]);
        ht.set('lime', 'lime');
        expect(ht.keyMap[1]).toEqual([['lime', 'lime'], ['green', '#008000'], ['fuchsia', 'fuchsia']]);
        ht.set('green', 'green');
        expect(ht.keyMap[1]).toEqual([['lime', 'lime'], ['green', 'green'], ['fuchsia', 'fuchsia']]);
    });

    test('getting data from the Hash Table', () => {
        const ht = new HashTable();
        expect(ht.size).toEqual(0);
        expect(ht.get('white')).toBeNull();
        ht.set('white', '#FFFFFF');
        expect(ht.get('white')).toEqual('#FFFFFF');
        ht.set('black', '#000000');
        expect(ht.get('black')).toEqual('#000000');
        ht.set('olive', '#808000');
        expect(ht.get('olive')).toEqual('#808000');
        ht.set('lime', '#00FF00');
        expect(ht.get('lime')).toEqual('#00FF00');
        ht.set('green', '#008000');
        expect(ht.get('green')).toEqual('#008000');
        ht.set('blue', '#0000FF');
        expect(ht.get('blue')).toEqual('#0000FF');
        ht.set('fuchsia', '#FF00FF');
        expect(ht.get('fuchsia')).toEqual('#FF00FF');
    });

    test('deleting data from the Hash Table', () => {
        const ht = new HashTable();
        expect(ht.get('white')).toBeNull();
        ht.set('white', '#FFFFFF');
        expect(ht.delete('white')).toBe(true);
        expect(ht.get('white')).toBeNull();
        ht.set('olive', '#808000');
        ht.set('blue', '#0000FF');
        expect(ht.keyMap[8]).toEqual([['olive', '#808000'], ['blue', '#0000FF']]);
        expect(ht.delete('olive')).toBe(true);
        expect(ht.keyMap[8]).toEqual([['blue', '#0000FF']]);
        expect(ht.delete('blue')).toBe(true);
        expect(ht.keyMap[8]).toEqual([]);
        ht.set('lime', '#00FF00');
        ht.set('green', '#008000');
        ht.set('fuchsia', '#FF00FF');
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00'], ['green', '#008000'], ['fuchsia', '#FF00FF']]);
        expect(ht.delete('green')).toBe(true);
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00'], ['fuchsia', '#FF00FF']]);
        expect(ht.delete('fuchsia')).toBe(true);
        expect(ht.keyMap[1]).toEqual([['lime', '#00FF00']]);
        expect(ht.delete('orange')).toBe(false);
    });
});