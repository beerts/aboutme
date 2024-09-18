document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.querySelector('.terminal-body');
    const input = document.getElementById('command-input');

 
    const commands = [
        'ABOUTME            tell about my informations',
        'GITHUB             redirect for my github page',
        'LINKEDIN           redirect for my linkedin page',
        'CLEAR              clear terminal',
        'ABOUTPAGE          how this page are made'
    ];


    function addCommandLine() {
        const newCommandLine = document.createElement('p');
        newCommandLine.className = 'prompt';
        newCommandLine.innerHTML = `C:\\Users\\Administrator> <input type="text" class="command-input" id="command-input" autofocus>`;
        terminalBody.appendChild(newCommandLine);


        terminalBody.scrollTop = terminalBody.scrollHeight;
    }


    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = input.value.trim();

            if (command) {
                if (command.toLowerCase() === 'clear') {
                    // Recarrega a página
                    location.reload();
                } else if (command.toLowerCase() === 'help') {
               
                    const helpMessage = commands.join('\n');
                    const responseLine = document.createElement('p');
                    responseLine.className = 'response';
                    responseLine.textContent = `AVAIABLE COMMANDS:\n\n${helpMessage}\n\n`;
                    terminalBody.appendChild(responseLine);

      
                    addCommandLine();
                } else if (command.toLowerCase() === 'aboutme') {
   
                    const responseLine = document.createElement('p');
                    responseLine.className = 'response';
                    responseLine.textContent = `Hello, i'm Bernardo 23y Brazilian
I have knowledge in Python, HTML, CSS, PowerBI, and Excel.
Frameworks such as Django, Streamlit, Flask, TKinter, Pandas, and Matplotlib.
My primary areas of focus include Web Development, Back-end, and Data Analysis.
I am also studying more about Artificial Intelligence.
Actually working at Information Technology (IT).\n
TYPE 'HELP' FOR MORE COMMANDS\n`;
                    terminalBody.appendChild(responseLine);
                } else if (command.toLowerCase() === 'aboutpage') {
 
                    const responseLine = document.createElement('p');
                    responseLine.className = 'response';
                    responseLine.textContent = `THIS PAGE ARE MADE WITH HTML, CSS and JavaScript.\nCreated by Bernardo Teixeira - 2024.`;
                    terminalBody.appendChild(responseLine);

           
                   addCommandLine();
                } else if (command.toLowerCase() === 'github') {
           
                    window.open('https://github.com/beerts', '_blank'); 
                } else if (command.toLowerCase() === 'linkedin') {
             
                    window.open('https://linkedin.com/in/bernardo-teixeira-341134272/', '_blank'); 
                } else {
        
                    const promptLine = document.createElement('p');
                    promptLine.className = 'prompt';
                    promptLine.textContent = `C:\\Users\\Administrator> ${command}`;
                    terminalBody.appendChild(promptLine);

      
                    const responseLine = document.createElement('p');
                    responseLine.className = 'response';
                    responseLine.textContent = `\n'${command}' is not recognized as an internal command or external, an operable program or a batch file.\n\n`; // Substitua com lógica real
                    terminalBody.appendChild(responseLine);

           
                    addCommandLine();
                }


                input.value = '';

   
                const newInput = document.querySelector('#command-input');
                newInput.focus();
            }
        }
    });
});
