function do_resize(textbox) {

    var maxrows=5; 
     var txt=textbox.value;
     var cols=textbox.cols;
   
    var arraytxt=txt.split('\n');
     var minrows=arraytxt.length; 
   
    for (i=0;i<arraytxt.length;i++) 
     minrows+=parseInt(arraytxt[i].length/cols);
   
    if (minrows>maxrows) textbox.rows=maxrows;
     else textbox.rows=minrows;
    }