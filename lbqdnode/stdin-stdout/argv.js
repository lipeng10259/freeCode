
console.log(process.argv)

// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'G:\\web\\test\\freeCode\\lbqdnode\\stdin-stdout\\argv.js' ]


// node .\argv.js --testing= 'something' --yeah


console.log(process.argv)

// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'G:\\web\\test\\freeCode\\lbqdnode\\stdin-stdout\\argv.js',
//   '--testing=',
//   'something',
//   '--yeah' ]

// node .\argv.js --testing='something' --yeah

[ 'C:\\Program Files\\nodejs\\node.exe',
  'G:\\web\\test\\freeCode\\lbqdnode\\stdin-stdout\\argv.js',
  '--testing=something',
  '--yeah' ]