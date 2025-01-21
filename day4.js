var a = (aa) => { console.log(aa * aa); };
a(6);
var arrays = (aa) => {
    for (var i = 0; i < aa.length;i++)
            { 
        console.log(aa[i]*aa[i]);
            }
};
// a(6);
arrays([1, 2, 3]);
var reverse1 = (aa) => { 
    console.log(aa.reverse());
}
reverse1("ujjwal")