const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "add new note",
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
// yargs.command("add", "add new note",
//     function (yargs) {
//         return yargs.option('title', {
//             alias: 't',
//             describe: 'Note title',
//         }).demandOption('title','Missing title')
//     },function(argv) {
//         console.log('adding...', argv);
//     })

yargs.command("remove", "remove a note",
    function (yargs) {
        return yargs.option('title', {
            alias: 't',
            describe: 'Note title',
        }).demandOption('title','Missing title')
    },function(argv) {
        notes.removeNote(argv.title);
    })
yargs.command("list", "list notes",
    () => {},
    () => {
    notes.listNotes();
    })
yargs.command("read", "read a note",
    () => {return yargs.option('title', {
        alias: 't',
        describe: 'Note title',
    }).demandOption('title','Missing title')
    },
    (argv) => {
        notes.readNotes(argv.title);
    })
// yargs.command({
//     command: "read",
//     describe: "read a note",
//     handler: function() {
//         console.log('reading...');
//     }
// })


yargs.parse()
