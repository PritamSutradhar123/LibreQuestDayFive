/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- EDITING & MEMORY ---
            case 1: note = "SHORTCUT: Use Ctrl+M to increase the indent in MS Word."; break;
            case 2: note = "MEMORY: RAM is temporary/volatile, while ROM is permanent/non-volatile."; break;
            case 3: note = "FORMATTING: In chemical formulas like H\u2082O, the '2' is a Subscript."; break;
            case 4: note = "LAYOUT: Indentation is the space between the margin and the start of a paragraph."; break;
            case 5: note = "PROCESSING: Word processing involves editing, formatting, storing, and printing documents."; break;
            case 6: note = "WRITER: The default margin in a LibreOffice Writer document is 1 inch."; break;
            case 7: note = "RPA: Bots in RPA mimic human actions to perform repetitive digital tasks."; break;
            case 8: note = "DATABASE: Use the 'Exchange Database' option to access database fields in a document."; break;
            case 9: note = "INDEXING: Heading levels H1, H2, and H3 can all be indexed in Writer."; break;
            case 10: note = "MENU: Bold, Italic, and Underline options are found in the Format Menu."; break;

            // --- NETWORKING & BANKING ---
            case 11: note = "TOPOLOGY: 'Moon' is not a valid network topology; Star, Bus, and Mesh are valid."; break;
            case 12: note = "BANKING: A defaulter is someone who fails to repay loan installments on time."; break;
            case 13: note = "UTR: UTR stands for Unique Transaction Reference in banking."; break;
            case 14: note = "RAM: RAM is a volatile memory type, unlike ROM or Magnetic Discs."; break;
            case 15: note = "MANUFACTURING: 3D Printing is also known as Additive Manufacturing."; break;
            case 16: note = "CHARTS: Data labels provide extra information about a specific value in a chart."; break;
            case 17: note = "NEFT: Money settlement via NEFT happens in half-hourly batches."; break;
            case 18: note = "CALC: Seeing #### in a cell means you must increase the cell width."; break;
            case 19: note = "OSS: Open Source Software (OSS) is developed and modified freely."; break;
            case 20: note = "DSL: DSL stands for Digital Subscriber Line."; break;

            // --- CHART & PROTOCOLS ---
            case 21: note = "WIZARD: Use the Chart Wizard to create charts in spreadsheet software."; break;
            case 22: note = "TWITTER: The hashtag symbol (#) indicates a trending topic on Twitter."; break;
            case 23: note = "OSI: IP Protocol and Routing function at the Network Layer of the OSI model."; break;
            case 24: note = "PIE CHART: A Pie chart shows values as circular sectors of a total circle."; break;
            case 25: note = "BLOCKCHAIN: Blockchain technology works on a Distributed Ledger to secure transactions."; break;
            case 26: note = "ECOMMERCE: COD, Cards, and Wallets are all common eCommerce payment methods."; break;
            case 27: note = "DATA: The 'Define Range' option is found under the Data menu."; break;
            case 28: note = "IMPRESS: Use Ctrl+G to Group and Ctrl+Shift+G to Ungroup in Impress."; break;
            case 29: note = "PPF: PPF stands for Public Provident Fund."; break;
            case 30: note = "SPAM: Unsolicited Bulk E-mails (UBI) are commonly called Spam."; break;

            // --- CYBERSECURITY & TRANSLATION ---
            case 31: note = "TITLE BAR: The file name of the open document is displayed on the Title bar."; break;
            case 32: note = "MALWARE: A Trojan is a type of malicious program or malware."; break;
            case 33: note = "DATABASE: Register data sources via Tools > Options > LibreOffice Base > Databases."; break;
            case 34: note = "CALC: The default name given to a new Calc file is 'untitled 1'."; break;
            case 35: note = "LAW: The Information Technology Act, 2000 regulates cybercrime in India."; break;
            case 36: note = "FORMULA: Adding empty cells (A1+A2) in Calc results in 0."; break;
            case 37: note = "TRANSMISSION: A Walkie-Talkie is a classic example of Half-Duplex transmission."; break;
            case 38: note = "SHORTCUT: Press Ctrl and V to paste text from the clipboard."; break;
            case 39: note = "ORIENTATION: Landscape is oriented horizontally; Portrait is oriented vertically."; break;
            case 40: note = "MATH: The result of the formula =100/-10/2 in Calc is -5."; break;

            // --- PRINTERS & MEDIA ---
            case 41: note = "AUTOCORRECT: Auto Correct helps reduce spelling errors in a document."; break;
            case 42: note = "PRINTER: A Laser printer is a type of Non-impact printing device."; break;
            case 43: note = "ASSEMBLER: An assembler translates Assembly language into Machine Code."; break;
            case 44: note = "IEEE: IEEE is the association that maintains standards for wireless networks."; break;
            case 45: note = "MACRO: A Macro is a saved sequence of commands or keystrokes for later use."; break;
            case 46: note = "SCIENCE: Fiber Optic cables work on the principle of Total Internal Reflection."; break;
            case 47: note = "TOC: The Table of Contents feature automatically turns entries into Hyperlinks."; break;
            case 48: note = "SUPERCOMPUTER: Supercomputers are the fastest, biggest, and most expensive computers."; break;
            case 49: note = "MEDIA: Radio Waves are an example of Unguided Media, not Guided (Wired) Media."; break;
            case 50: note = "TRACK CHANGES: Track changes in Writer allows accepting or rejecting, but not deleting."; break;

            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();