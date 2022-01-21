const fs = require('fs');
const chalk = require('chalk');

//If there is no data.json file, an empty array will assigned to the notes variable
let notes;
try{
    const data = fs.readFileSync('data.json');
     notes = JSON.parse(data);
}catch(err){
    notes = [];
}

const saveNotes = (note) => {
    const JSONString = JSON.stringify(note);
    fs.writeFileSync('data.json',JSONString);
}

//Read notes method
const readNote = (title) => {
    const searchingNote = notes.find(note => note.title === title);
    if(searchingNote){
        console.log('Title:', chalk.bold.blue.inverse(searchingNote.title))
        console.log('body:',chalk.blue(searchingNote.body))
    }else{
        console.log('Note is not found');
    }
}


//List notes method
const listNotes = () => {
    if(notes.length === 0 ){
        console.log(chalk.yellow.inverse('Notes collection is empty'));
    }
    console.log(chalk.green.inverse('Your notes'))
    console.log(chalk.green("-------------------"));
   notes.forEach((note,index) => console.log( `(${index + 1})` , chalk.yellow(note.title))); 
}


//Add note method
const addNote = (title,body) => {
    //Check if there is any note with the same name to prevent duplication
    const duplicateNote = notes.find(note => note.title === title);
    if(!duplicateNote){
        notes.push({title:title,body:body});
        saveNotes(notes);

        //log the message
        console.log(chalk.blue('Adding new note...'));
        setTimeout(()=>{
            console.log(chalk.green.inverse('New note added!'));
        },1000)
    }else{

        //log the message
        console.log(chalk.red.inverse('Note title already exists!'));
    }
}

//Remove note method
const removeNote = (title) => {
    const noteExist = notes.filter(note => note.title === title);
    if(noteExist.length === 0){
        //Log the message
        console.log(chalk.red.inverse('No note found'))
    }else{
        const filteredNotes = notes.filter(note => note.title !== title);
        saveNotes(filteredNotes); 

        //Log the message
        console.log(chalk.blue(`Removing "${title}"...`));
        setTimeout(()=>{
            console.log(chalk.green.inverse('Removed note'));
        },1000)
    }
}
module.exports = { addNote:addNote, removeNote:removeNote, listNotes:listNotes, readNote:readNote}; 