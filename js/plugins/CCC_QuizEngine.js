/*:
 * @plugindesc CCC Quiz Engine - Day 5 MCQ Logic (Questions 1-50).
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 * 2. Use \V[2] for Question, \V[4]-\V[7] for Choices.
 * 3. Variable #3 stores the Correct Answer Index (1-4).
 * 4. Variable #16 stores the Correct Answer Text (String).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "Which key is used to increase indent?";
                a = "Ctrl+M"; b = "Alt+I"; c = "Ctrl+I"; d = "F10";
                ans = 1; break; 
            case 2:
                q = "Match the following (Memory Types):";
                a = "1-iv, 2-i, 3-iii, 4-ii"; b = "1-iv, 2-i, 3-ii, 4-iii"; c = "1-i, 2-iv, 3-ii, 4-iii"; d = "1-ii, 2-i, 3-iv, 4-iii";
                ans = 2; break; 
            case 3:
                q = "In chemical formula H\u2082O, what does '2' appear to be in Libre Writer?";
                a = "Belowscript"; b = "Superscript"; c = "Bottomscript"; d = "Subscript";
                ans = 4; break; 
            case 4:
                q = "Space between margin and beginning of a paragraph is called:";
                a = "Spacing"; b = "Gutter"; c = "Alignment"; d = "Indentation";
                ans = 4; break; 
            case 5:
                q = "Word processing means:";
                a = "Only typing text"; b = "Editing, formatting, storing and printing"; c = "Viewing documents only"; d = "Installing software";
                ans = 2; break; 
            case 6:
                q = "What is the default margin in LibreOffice Writer document?";
                a = "0.5"; b = "0.2"; c = "10"; d = "1";
                ans = 1; break; 
            case 7:
                q = "What is the role of 'Bots' in RPA?";
                a = "Physical cleaning of office"; b = "Mimicking human actions for repetitive tasks"; c = "Manufacturing car parts"; d = "Managing cloud storage";
                ans = 2; break; 
            case 8:
                q = "Access database fields in a document using which option?";
                a = "Add Database"; b = "Add Table"; c = "Add Relation"; d = "Exchange Database";
                ans = 4; break;
            case 9:
                q = "Which of the following levels of heading can be indexed in Writer?";
                a = "H1"; b = "H3"; c = "H2"; d = "All of these";
                ans = 4; break; 
            case 10:
                q = "Bold, Italic, and Underline options are available in:";
                a = "Format Menu"; b = "Insert Menu"; c = "Tools Menu"; d = "View Menu";
                ans = 1; break; 
            case 11:
                q = "Which of the following is not a valid network topology?";
                a = "Star"; b = "Moon"; c = "Bus"; d = "Mesh";
                ans = 2; break; 
            case 12:
                q = "In banking, who is called a defaulter?";
                a = "Pays loan on time"; b = "Opens a bank account"; c = "Fails to repay loan on time"; d = "Deposits extra money";
                ans = 3; break; 
            case 13:
                q = "What does UTR stand for in banking transactions?";
                a = "Universal Transaction Reference"; b = "Unique Transaction Reference"; c = "User Transaction Reference"; d = "Universal Transaction Record";
                ans = 2; break; 
            case 14:
                q = "Which one of the following is volatile?";
                a = "Bubble Memory"; b = "RAM"; c = "ROM"; d = "Magnetic Disc";
                ans = 2; break; 
            case 15:
                q = "By what other name is 3D Printing known?";
                a = "Subtractive Manufacturing"; b = "Robotic Manufacturing"; c = "Additive Manufacturing"; d = "Cloud Manufacturing";
                ans = 3; break; 
            case 16:
                q = "Provide(s) extra information about a value in the chart:";
                a = "Legends"; b = "Data series"; c = "Data labels"; d = "Data info";
                ans = 1; break; 
            case 17:
                q = "How does settlement happen when sending money via NEFT?";
                a = "Instant"; b = "In half-hourly batches"; c = "Only once a day"; d = "After 48 hours";
                ans = 2; break; 
            case 18:
                q = "Seeing #### in place of data in a cell means you need to:";
                a = "increase width"; b = "decrease width"; c = "Both a and b"; d = "None of these";
                ans = 1; break; 
            case 19:
                q = "Software developed and modified freely is called:";
                a = "Synchronous Software"; b = "Package"; c = "Middleware"; d = "Open Source Software";
                ans = 4; break; 
            case 20:
                q = "What is the full form of 'DSL'?";
                a = "Developer Structural Language"; b = "Data Sequence Latency"; c = "Design System Language"; d = "Digital Subscriber Line";
                ans = 4; break; 
            case 21:
                q = "What do you use to create a chart?";
                a = "Pie Wizard"; b = "Excel Wizard"; c = "Data Wizard"; d = "Chart Wizard";
                ans = 4; break; 
            case 22:
                q = "Which symbol indicates Twitter trending?";
                a = "@"; b = "#"; c = "%"; d = "&";
                ans = 2; break; 
            case 23:
                q = "Which OSI layer handles 'IP Protocol' and 'Routing'?";
                a = "Physical Layer"; b = "Network Layer"; c = "Data Link Layer"; d = "Transport Layer";
                ans = 2; break; 
            case 24:
                q = "Which chart shows values as circular sectors of total circle?";
                a = "Bar chart"; b = "Circular chart"; c = "Oval chart"; d = "Pie chart";
                ans = 4; break; 
            case 25:
                q = "Which technology works on a 'Distributed Ledger'?";
                a = "Robotics"; b = "Blockchain"; c = "3D Printing"; d = "Cloud Computing";
                ans = 2; break; 
            case 26:
                q = "Payment method commonly used in eCommerce?";
                a = "Cash on delivery"; b = "Credit/debit cards"; c = "Digital wallets"; d = "All of the above";
                ans = 4; break; 
            case 27:
                q = "Define range option is available under which menu in Calc?";
                a = "Insert"; b = "View"; c = "Developer"; d = "Data";
                ans = 4; break; 
            case 28:
                q = "Shortcut key for Group/Ungroup in Impress?";
                a = "Ctrl+G / Ctrl+Shift+G"; b = "Ctrl+U / Ctrl+Shift+U"; c = "Ctrl+M / Ctrl+N"; d = "Ctrl+Alt+G";
                ans = 1; break; 
            case 29:
                q = "PPF Means:";
                a = "Pension Planning Funds"; b = "Person Having Pension"; c = "Public Provident Fund"; d = "Permanent Practitioner";
                ans = 3; break; 
            case 30:
                q = "Unsolicited Bulk E-mails (UBI) are called:";
                a = "SMS"; b = "MMS"; c = "Spam emails"; d = "Malicious emails";
                ans = 3; break; 
            case 31:
                q = "Where is the file name displayed?";
                a = "Title bar"; b = "Taskbar"; c = "Status bar"; d = "Scroll bar";
                ans = 1; break; 
            case 32:
                q = "What is Trojan?";
                a = "Operating System"; b = "Utility Software"; c = "Malicious Program / Malware"; d = "Antivirus";
                ans = 3; break; 
            case 33:
                q = "Identify correct steps to register data source in .odb:";
                a = "Tools > Options > Databases"; b = "Tools > Databases"; c = "Tools > Options > Base"; d = "Tools > Options > Base > Databases";
                ans = 4; break; 
            case 34:
                q = "The default name given to the Calc file is:";
                a = "default one"; b = "untitled 1"; c = "calc 1"; d = "B or C";
                ans = 2; break; 
            case 35:
                q = "Which law regulates cybercrime and e-commerce in India?";
                a = "Consumer Protection Act"; b = "Indian Penal Code"; c = "IT Act, 2000"; d = "Copyright Act";
                ans = 3; break; 
            case 36:
                q = "Result from adding A1+A2 (empty cells) to Calc?";
                a = "###"; b = "5"; c = "1"; d = "0";
                ans = 4; break; 
            case 37:
                q = "Best example of Half-Duplex transmission?";
                a = "Mobile Phone"; b = "Keyboard"; c = "Walkie-Talkie"; d = "Radio";
                ans = 3; break; 
            case 38:
                q = "To paste text from clipboard, press:";
                a = "Ctrl and V"; b = "Ctrl and X"; c = "Ctrl and S"; d = "Ctrl and p";
                ans = 1; break; 
            case 39:
                q = "Landscape means ___ while portrait means ___:";
                a = "Vertically, Horizontally"; b = "Horizontally, Vertically"; c = "Top, bottom"; d = "Bottom, Top";
                ans = 2; break; 
            case 40:
                q = "Output of =100/-10/2 in Calc?";
                a = "-5"; b = "5"; c = "20"; d = "45";
                ans = 1; break; 
            case 41:
                q = "Helps to reduce spelling errors in document:";
                a = "Auto Format"; b = "Auto Correct"; c = "Auto Text"; d = "None";
                ans = 2; break; 
            case 42:
                q = "Laser printer is a type of:";
                a = "Impact printing"; b = "Non-impact printing"; c = "Both a & b"; d = "None";
                ans = 2; break; 
            case 43:
                q = "Translates Assembly language into Machine Code:";
                a = "A compiler"; b = "An assembler"; c = "An operating system"; d = "An editor";
                ans = 2; break; 
            case 44:
                q = "Industry association maintaining wireless standards:";
                a = "ISM"; b = "UNII"; c = "FCC"; d = "IEEE";
                ans = 4; break; 
            case 45:
                q = "Saved sequence of commands for later use:";
                a = "Macro"; b = "Automation"; c = "Indentation"; d = "Mail merge";
                ans = 1; break; 
            case 46:
                q = "Scientific principle for Fiber Optic Cable:";
                a = "Absorption"; b = "Refraction"; c = "Scattering"; d = "Total Internal Reflection";
                ans = 4; break; 
            case 47:
                q = "Table of contents makes entries automatically as:";
                a = "Table"; b = "Row"; c = "Column"; d = "Hyperlinks";
                ans = 4; break; 
            case 48:
                q = "Refers to fastest, biggest and most expensive computer:";
                a = "Personal Computer"; b = "Laptops"; c = "Super computer"; d = "Notebook";
                ans = 3; break; 
            case 49:
                q = "Which is NOT an example of 'Guided Media' (Wired)?";
                a = "Coaxial Cable"; b = "Twisted Pair Cable"; c = "Fiber Optic Cable"; d = "Radio Waves";
                ans = 4; break; 
            case 50:
                q = "Track changes in Writer does not allow one to:";
                a = "Accept"; b = "Reject"; c = "Delete"; d = "Accept All";
                ans = 3; break; 

            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(2, q);
        this.setValue(3, ans);
        this.setValue(4, a);
        this.setValue(5, b);
        this.setValue(6, c);
        this.setValue(7, d);
        
        $gameVariables.setValue(16, String(correctStr));
    };
})();