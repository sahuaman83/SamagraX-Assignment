import React, { useEffect } from 'react';
import IndexedDb from './indexedDb'

const Test = ({cmntdata, photodata, tododata, postdata}) => {
    useEffect(() => {
        const runIndexDb = async () => {
            const indexedDb = new IndexedDb('SamagraX');
            await indexedDb.createObjectStore(['comments', 'photos', 'todos', 'posts']);
            // await indexedDb.putValue('comments', { name: 'A Game of Thrones' });
            // await indexedDb.putBulkValue('comments', cmntdata);
            await indexedDb.putBulkValue('comments', [{ name: 'A Song of Fire and Ice' }, { name: 'Harry Potter and the Chamber of Secrets' }]);
            // await indexedDb.getValue('comments', 1);
            // await indexedDb.getAllValue('comments');
            // await indexedDb.deleteValue('comments', 1);
        }
        runIndexDb();
    }, []);
    return (<></>)
}

export default Test;