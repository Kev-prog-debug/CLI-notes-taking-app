# CLI-notes-taking-app
A command line note-taking app using NodeJS, File System module and yargs library.

You can use different commands like 
'add' to add new notes, 
'remove' to remove unwanted notes , 
'list' to list all the notes that you've written and 
'search' to search a specific note that you want to read.

Note: This app use Command Line Argument to perform the above actions.

--> To add a new note ,you need to run the under command in your command prompt
==> node app.js add --title=" Your note title goes here " --body= " Your main content goes here "

--> To remove a note , you can run this command
==> node app.js remove --title=" Title of the note you want to remove "

--> To list all the notes that you've written 
==> node app.js list

--> To search a specific note 
==> node app.js read --title=" Title of the note that you want to search or read "

For more informations , you can use " node app.js --help "
