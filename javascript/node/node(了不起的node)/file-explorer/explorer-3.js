var fs = require('fs'),
stdin = process.stdin,
stdout = process.stdout;

fs.readdir(process.cwd() , function (err , files) {

    console.log('');

    if (!files.length) {

        return console.log('\033[31m no files to show!\033[39m\n');

    }

    console.log(' Select which file or directory you want to see\n')

    file (0)

    let stats = [];

    function file (i) {

        var filename = files[i];
        
        fs.stat(__dirname +'/' + filename , function ( err , stat) {

            stats[i] = stat;
    
            if(stat.isDirectory()) {
    
                console.log('     ' + i +'  \033[36m' + filename + '/\033[39m');
    
            } else {
    
                console.log('     ' + i +'  \033[90m' + filename + '/\033[39m')
    
            }
    
            i++
    
            if( i == files.length) {

                read ()

            } else {
                
                file(i)

            }
    
        })
    
    }
    
    function read () {
    
        console.log('');
    
        stdout.write('      \033mEnter your choice: \033[39m')
    
        stdin.resume()
    
        stdin.on('data' , option);
    
    
    }
    
    function option (data) {

        let filename =  files[Number(data)];

        console.log(filename)
        
        if(!filename){
    
            stdout.write('   \033[31mEnter your choice:033[39m');
    
        } else {

            if(stats[Number(data)].isDirectory()) {

                fs.readdir(__dirname+'/'+filename , function ( err , data) {
                    data.forEach(element => {
                        console.log('     -    ' + element)
                    });
                    stdin.pause();
                    console.log('');

                })

            } else {
                stdin.pause();
                fs.readFile(__dirname+'/'+filename , 'utf8' , function (err , data) {
                    console.log('');
                    console.log('\033[90m' + data.replace(/(.*)/g, '       $1' + '\033[39m'));
                })
            }


        }
    
    }

})



