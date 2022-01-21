const yargs = require('yargs');
const notes = require('./notes.js');
//Create custom commands using yargs.command methods
//add command
yargs.command({
    command:'add',
    description:'Add a new note',
    builder:{
        title:{
            description:'Add a new note',
            demandOption:true,
            type:'string'
        },
        body:{
            description:'Add note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})

//Remove command
yargs.command({
    command:"remove",
    description:'Remove a note',
    builder:{
        title:{
            description:'Title of note to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.removeNote(yargs.argv.title);
    } 
})

//Read command
yargs.command({
    command:'read',
    description:"Read a note",
    builder:{
        title:{
            description:'Note title you want to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.readNote(yargs.argv.title)
    }
})

//List command
yargs.command({
    command:'list',
    description:'List all the notes',
    handler(){
        notes.listNotes();
    }
})

//Need to call this method to make the yargs parse the arguments
yargs.parse();
