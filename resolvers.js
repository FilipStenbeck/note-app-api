const db = require('./db');

const resolvers = {
    Query: {
        notes: () => {
            try {
                return db.get();
            } catch (error) {
                console.log('error in query Notes:', error);
                return { status: '500', message: 'error' };
            }
        }
    },
    Mutation: {
        addNote: (parent, args) => {
            try {
                const id = require('crypto')
                    .randomBytes(10)
                    .toString('hex');
                const note = {
                    id,
                    title: args.title,
                    body: args.body
                };
                db.push(id, note);
                console.log(`added note id:${id}`);

                return note;
            } catch (error) {
                console.log('error in addNote:', error);
                return { status: '500', message: 'error' };
            }
        },
        saveNote: (parent, args) => {
            try {
                const note = {
                    id: args.id,
                    title: args.title,
                    body: args.body
                };
                db.push(note.id, note);
                console.log(`saved note id:${note.id}`);
                return note;
            } catch (error) {
                console.log('error in saveNote:', error);
                return { status: '500', message: 'error' };
            }
        },
        deleteNote: (parent, args) => {
            try {
                db.delete(args.id);
                console.log(`deleted note id:${args.id}`);
                return { status: '200', message: 'ok' };
            } catch (error) {
                console.log('error in deleteNote:', error);
                return { status: '500', message: 'error' };
            }
        }
    }
};

module.exports = resolvers;
