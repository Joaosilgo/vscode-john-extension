// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");
const path = require("path");




//const myModule = require('./src/terminal.js');


const reverseModule = require('./src/reverse.js');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "john-extension" is now active! 🔥');
	vscode.window.setStatusBarMessage("john-package 🔰");
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand('john-extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		
		// Display a message box to the user
	 
        
		vscode.window.showInformationMessage('Hello World from john-extension! 🔥');
		console.log('Hello World from john-extension! 🔥');
		//var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
		//vscode.window.showQuickPick(vegetables);
		vscode.window.showWarningMessage('WARNING');
		vscode.window.showErrorMessage('ERROR');
		//vscode.scm.createSourceControl('git', 'Git');
		vscode.window.createTerminal(`Terminal 🎮`).show();
		vscode.window.onDidOpenTerminal(e => {
			e.sendText("echo When I wrote this, only God and I understood what I was doing....  Now, God only knows");
		
		});
		vscode.window.activeTerminal.show();

		vscode.window.setStatusBarMessage("hey there 🔰");

		const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
		statusBarItem.text = `$(beaker) Magic. It´s Happening.  `;
		statusBarItem.show();



		


		

	});
	context.subscriptions.push(disposable);


	let show = vscode.commands.registerCommand('john-extension.show', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(' john-extension.show! 🚀');
		console.log('Show! 🚀');
		var vegetables = ['Party', 'Hardcore', 'Ludacris', 'Peace'];
		vscode.window.showQuickPick(vegetables).then(
			function (value) {

				console.log(value); // Success!
				vscode.window.showInformationMessage('It`s ' + value + ' Time ⚡');
			}, function (value) {
				console.log(value + 'Value 😭'); // Error!
			});;




	});

	context.subscriptions.push(show);


	let coffee = vscode.commands.registerCommand('john-extension.coffee', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(' john-extension.coffee! ☕');
		console.log('coffee!☕');

		const panel = vscode.window.createWebviewPanel(
			'coffee',
			'Coffee Time ☕',
			vscode.ViewColumn.One,
			{}
		);

		// And set its HTML content
	

		const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
		statusBarItem.text = `$(zap)  It´s Coffe Time Broo !!!   `;
		statusBarItem.tooltip ="It´s Coffe Time Broo !!!";
		statusBarItem.command="john-extension.coffee";
		statusBarItem.show();


	
	/*
		let text =  vscode.window.createInputBox();
		text.placeholder = "Tell me something";
		text.prompt="Tell me Something";
		text.step;
		text.title="Tell me More";
		
		text.show();

		vscode.window.showInformationMessage(`Got: ${text.}`);
		


*/


		
	
		  vscode.window.showInputBox({
				value: '15',
			//	valueSelection: [2, 4],
				placeHolder: 'For example: 15 ',
			    ignoreFocusOut: true ,	
				validateInput: text => {
					vscode.window.showInformationMessage(`BACK IN : ${text} min`);

					return text === '0'  ? 'Not 0!' : null;
				}
 
			
			}).then( x =>{ 
				
				panel.webview.html = getWebviewContent(x);
				vscode.window.showInformationMessage(`Got: ${x}`);
			});
			
			
			


	});



	function getWebviewContent( x ) {
		return `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title> Coffee Time ☕ </title>
		  <!-- Compiled and minified CSS -->
		  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
	  
		  <!-- Compiled and minified JavaScript -->
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
		  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	  </head>
	  <body>
	  <style>
	  
	  body {
		text-align: center;
	  }
	
	  </style>

	 
	
	  <h1>It´s Coffee Time</h1>
	  <h3>Back in ${x} min </h3>
	  <img class="responsive-img" src="https://i.imgur.com/SshpXa4.gif"   />

	

		  
	  <div class="progress">
      <div class="indeterminate"></div>
  </div>


	  </body>
	  </html>`;
	}



	context.subscriptions.push(coffee);







	let boiler = vscode.commands.registerCommand('john-extension.boilerplate', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('BoilerPlate Active! 📜');
		console.log('BoilerPlate from john-extension! 📜');


		const htmlContent = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<title>Document</title>
			<link rel="stylesheet" href="app.css" />
		</head>
		<body>
			<script src="app.js"></script>
		</body>
		</html>
				`;




		fs.writeFile(
			path.join(__dirname, 'index.html'),
			htmlContent,
			(err) => {
				if (err) {

					vscode.window.showErrorMessage(
						'Failed to create boilerplate files 📜'
					);
					return console.log(err);
				}
				fs.writeFile(path.join(__dirname, 'app.js'), '', (err) => {
					if (err) {

						vscode.window.showErrorMessage(
							'Failed to create boilerplate files 📜'
						);
						return console.log(err);
					}
					fs.writeFile(
						path.join(__dirname, 'app.css'),
						'',
						(err) => {
							if (err) {

								vscode.window.showErrorMessage(
									'Failed to create boilerplate files 📜'
								);
								return console.log(err);
							}

							// vscode.window.showInformationMessage(__dirname);
							let GoToFiles = 'Go to Files';
							vscode.window.showInformationMessage('Click to see 📄', GoToFiles)
								.then(selection => {
									if (selection === GoToFiles) {
										vscode.env.openExternal(vscode.Uri.parse(__dirname));
									}

								});

							vscode.window.showWarningMessage(
								`Created boilerplate files!  `
							);
						}
					);
				});
			}
		);




	});

	context.subscriptions.push(boiler);

















	
	let reverse = vscode.commands.registerCommand('john-extension.reverse', function () {

			reverseModule.reverse();





			vscode.window.withProgress({
				location:vscode.ProgressLocation.Notification,
				title: "I am long running!",
				cancellable: true
			}, (progress, token) => {
				token.onCancellationRequested(() => {
					console.log("User canceled the long running operation");
				});
	
				progress.report({ increment: 0 });
	
				setTimeout(() => {
					progress.report({ increment: 10, message: "I am long running! - still going..." });
				}, 1000);
	
				setTimeout(() => {
					progress.report({ increment: 40, message: "I am long running! - still going even more..." });
				}, 2000);
	
				setTimeout(() => {
					progress.report({ increment: 50, message: "I am long running! - almost there..." });
				}, 3000);
	
				const p = new Promise(resolve => {
					setTimeout(() => {
						resolve();
					}, 5000);
				});
	
				return p;
			});



	});
	context.subscriptions.push(reverse);










}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
