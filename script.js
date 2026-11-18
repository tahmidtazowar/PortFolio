/* =========================================================
   0xCYB3RW0LF PORTFOLIO
   Interactive Terminal + Floating Particles
========================================================= */


/* =========================================================
   YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================================
   FLOATING PARTICLES
========================================================= */

const particleContainer =
    document.getElementById("particles");

const PARTICLE_COUNT = 65;

for (let i = 0; i < PARTICLE_COUNT; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (7 + Math.random() * 18) + "s";

    particle.style.animationDelay =
        Math.random() * 12 + "s";

    particle.style.opacity =
        0.2 + Math.random() * 0.7;

    particleContainer.appendChild(particle);
}


/* =========================================================
   TERMINAL ELEMENTS
========================================================= */

const terminalScreen =
    document.getElementById("terminalScreen");

const terminalInput =
    document.getElementById("terminalInput");


/* =========================================================
   COMMAND HISTORY
========================================================= */

let commandHistory = [];

let historyIndex = -1;


/* =========================================================
   TERMINAL COMMANDS
========================================================= */

const commands = {

    help: () => {

        return `
<div class="cyan">Available commands:</div>
<br>

<span class="purple">help</span>
&nbsp;&nbsp;&nbsp; show available commands

<br>

<span class="purple">about</span>
&nbsp;&nbsp;&nbsp; display profile information

<br>

<span class="purple">skills</span>
&nbsp;&nbsp;&nbsp; display technical skills

<br>

<span class="purple">social</span>
&nbsp;&nbsp;&nbsp; display social profiles

<br>

<span class="purple">github</span>
&nbsp;&nbsp;&nbsp; open GitHub

<br>

<span class="purple">blog</span>
&nbsp;&nbsp;&nbsp; open personal blogs

<br>

<span class="purple">contact</span>
&nbsp;&nbsp;&nbsp; display contact links

<br>

<span class="purple">whoami</span>
&nbsp;&nbsp;&nbsp; identify the developer

<br>

<span class="purple">date</span>
&nbsp;&nbsp;&nbsp; show current date/time

<br>

<span class="purple">clear</span>
&nbsp;&nbsp;&nbsp; clear terminal

<br>

<span class="purple">banner</span>
&nbsp;&nbsp;&nbsp; display CYB3RW0LF banner
        `;

    },


    about: () => {

        return `
<div class="cyan">
&gt; PROFILE
</div>

<br>

Name:
<span class="purple">
Tahmid Tazowar Sachhya
</span>

<br>

Profession:
Student

<br>

Institute:
Bangladesh Army University of Science and Technology

<br>

Alias:
<span class="purple">
0xCYB3RW0LF
</span>

<br>

Focus:
Software Development,
Cyber Security,
Pentesting,
OSINT,
Bug Hunting.
        `;

    },


    whoami: () => {

        return `
<span class="cyan">
Tahmid Tazowar Sachhya
</span>

<br>

Software Developer //
Cyber Security Specialist //
Pentester //
OSINT //
Bug Hunter
        `;

    },


    skills: () => {

        return `
<div class="cyan">
&gt; TECHNICAL CAPABILITIES
</div>

<br>

[01] Software Development

<br>

[02] Cyber Security

<br>

[03] Penetration Testing

<br>

[04] OSINT

<br>

[05] Bug Hunting

<br>

[06] Security Research

<br>

[07] Terminal / CLI Workflows
        `;

    },


    social: () => {

        return `
<div class="cyan">
&gt; DIGITAL FOOTPRINT
</div>

<br>

GitHub:
<span class="purple">
@0xcyb3rw0lf6t9
</span>

<br>

Telegram:
<span class="purple">
@Test_by_w0lf
</span>

<br>

Instagram:
<span class="purple">
@tahmid_tazowar007
</span>

<br>

Facebook:
<span class="purple">
CYB3RW0LF.6T9
</span>

<br>

LinkedIn:
<span class="purple">
Tahmid Tazowar Sachhya
</span>
        `;

    },


    github: () => {

        window.open(
            "https://github.com/0xcyb3rw0lf6t9",
            "_blank"
        );

        return `
<span class="cyan">
[+] Opening GitHub...
</span>
        `;

    },


    blog: () => {

        window.open(
            "https://0xcyb3rw0lf007.my.canva.site/tahmid-tazowar-sachhya-s",
            "_blank"
        );

        window.open(
            "https://cyb3rw0lf007.wordpress.com/",
            "_blank"
        );

        return `
<span class="cyan">
[+] Opening blogs...
</span>
        `;

    },


    contact: () => {

        return `
<div class="cyan">
&gt; CONTACT / SOCIAL
</div>

<br>

GitHub:
<a
    href="https://github.com/0xcyb3rw0lf6t9"
    target="_blank"
    class="purple"
>
    github.com/0xcyb3rw0lf6t9
</a>

<br>

Telegram:
<a
    href="https://t.me/Test_by_w0lf"
    target="_blank"
    class="purple"
>
    t.me/Test_by_w0lf
</a>

<br>

LinkedIn:
<a
    href="https://linkedin.com/in/ahamid-tahmid-tazowar-sachhya-3a5bb0334"
    target="_blank"
    class="purple"
>
    LinkedIn Profile
</a>
        `;

    },


    date: () => {

        return `
<span class="cyan">
Current system time:
</span>

<br>

${new Date().toString()}
        `;

    },


    banner: () => {

        return `
<pre class="cyan">
 ██████╗██╗   ██╗██████╗ ██████╗
██╔════╝╚██╗ ██╔╝╚════██╗██╔══██╗
██║      ╚████╔╝  █████╔╝██████╔╝
██║       ╚██╔╝   ██╔══╝ ██╔══██╗
╚██████╗   ██║    ███████╗██║  ██║
 ╚═════╝   ╚═╝    ╚══════╝╚═╝  ╚═╝
</pre>

<span class="purple">
0xCYB3RW0LF // SECURITY RESEARCH
</span>
        `;

    }

};


/* =========================================================
   WRITE TERMINAL OUTPUT
========================================================= */

function writeLine(command, output) {

    const commandLine =
        document.createElement("div");

    commandLine.className =
        "terminal-line";

    commandLine.innerHTML = `

        <span class="prompt">
            visitor@cyb3rw0lf
        </span>:~$

        <span>
            ${escapeHTML(command)}
        </span>
    `;


    const outputLine =
        document.createElement("div");

    outputLine.className =
        "terminal-line";

    outputLine.innerHTML =
        output;


    terminalScreen.insertBefore(
        commandLine,
        document.querySelector(
            ".terminal-input-line"
        )
    );

    terminalScreen.insertBefore(
        outputLine,
        document.querySelector(
            ".terminal-input-line"
        )
    );


    terminalScreen.scrollTop =
        terminalScreen.scrollHeight;
}


/* =========================================================
   CLEAR TERMINAL
========================================================= */

function clearTerminal() {

    const lines =
        terminalScreen.querySelectorAll(
            ".terminal-line"
        );

    lines.forEach(line => {
        line.remove();
    });

}


/* =========================================================
   EXECUTE COMMAND
========================================================= */


function executeCommand(rawCommand) {

    const input = rawCommand.trim();

    if (!input) return;

    const normalized = input.toLowerCase();

    const commandName = normalized.split(/\s+/)[0];

    const args = input.slice(commandName.length).trim();

    // Command history
    if (
        commandHistory[commandHistory.length - 1] !== normalized
    ) {
        commandHistory.push(normalized);
    }

    historyIndex = commandHistory.length;

    // Clear terminal
    if (commandName === "clear") {
        clearTerminal();
        return;
    }

    // Unknown command
    if (!commands[commandName]) {

        writeLine(
            rawCommand,
            `
            <span style="color:#ff5577">
                Command not found: ${escapeHTML(input)}
            </span>
            <br>
            Type <span class="cyan">help</span> to see available commands.
            `
        );

        return;
    }

    // Execute command
    try {

        const output = commands[commandName](args);

        writeLine(rawCommand, output);

    } catch (error) {

        writeLine(
            rawCommand,
            `<span style="color:#ff5577">
                [!] Command execution failed.
            </span>`
        );

        console.error(error);
    }

}



/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


/* =========================================================
   TERMINAL INPUT
========================================================= */

terminalInput.addEventListener(
    "keydown",
    function(event) {


        /* ENTER */

        if (event.key === "Enter") {

            const value =
                terminalInput.value;

            terminalInput.value = "";

            executeCommand(value);

        }


        /* ARROW UP */

        else if (
            event.key === "ArrowUp"
        ) {

            event.preventDefault();

            if (
                commandHistory.length === 0
            ) {
                return;
            }

            historyIndex =
                Math.max(
                    0,
                    historyIndex - 1
                );

            terminalInput.value =
                commandHistory[
                    historyIndex
                ];

        }


        /* ARROW DOWN */

        else if (
            event.key === "ArrowDown"
        ) {

            event.preventDefault();

            if (
                commandHistory.length === 0
            ) {
                return;
            }

            historyIndex =
                Math.min(
                    commandHistory.length,
                    historyIndex + 1
                );

            if (
                historyIndex ===
                commandHistory.length
            ) {

                terminalInput.value = "";

            } else {

                terminalInput.value =
                    commandHistory[
                        historyIndex
                    ];

            }

        }


        /* CTRL + L */

        else if (
            event.ctrlKey &&
            event.key.toLowerCase() === "l"
        ) {

            event.preventDefault();

            clearTerminal();

        }


        /* TAB AUTOCOMPLETE */

        else if (
            event.key === "Tab"
        ) {

            event.preventDefault();

            autocomplete();

        }

    }
);


/* =========================================================
   AUTOCOMPLETE
========================================================= */


function autocomplete() {

    const value = terminalInput.value
        .trim()
        .toLowerCase();

    if (!value) return;

    const matches = Object.keys(commands)
        .filter(command => command.startsWith(value));

    if (matches.length === 1) {

        terminalInput.value = matches[0];

    } else if (matches.length > 1) {

        writeLine(
            value,
            `
            <span class="cyan">Matching commands:</span>
            <br>
            ${matches.map(command =>
                `<span class="purple">${escapeHTML(command)}</span>`
            ).join(" &nbsp; | &nbsp; ")}
            `
        );

    } else {

        writeLine(
            value,
            `<span style="color:#ff5577">No matching commands.</span>`
        );

    }
}


/* =========================================================
   CLICK TERMINAL = FOCUS
========================================================= */

terminalScreen.addEventListener(
    "click",
    () => {

        terminalInput.focus();

    }
);


/* =========================================================
   INITIAL FOCUS
========================================================= */

setTimeout(() => {

    terminalInput.focus();

}, 500);
/* =========================================================
   PROFILE IMAGE 3D TILT
========================================================= */

const profilePicture =
    document.querySelector(".profile-picture");

if (profilePicture) {

    profilePicture.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 800) {
                return;
            }

            const rect =
                profilePicture.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            const rotateX =
                ((centerY - y) / centerY) * 5;

            profilePicture.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.025)
                `;
        }
    );


    profilePicture.addEventListener(
        "mouseleave",
        () => {

            profilePicture.style.transform =
                `
                perspective(1000px)
                rotateY(-3deg)
                `;
        }
    );

}

/* =========================================================
   QUICK COMMAND BUTTONS
========================================================= */

document.querySelectorAll("[data-command]").forEach(button => {

    button.addEventListener("click", () => {

        const command = button.dataset.command;

        terminalInput.value = "";

        executeCommand(command);

        terminalInput.focus();

    });

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        !event.repeat
    ) {

        terminalInput.focus();

    }

});


/* =========================================================
   TERMINAL FOCUS
========================================================= */

terminalScreen.addEventListener("click", () => {

    terminalInput.focus();

});
