var vernam = require('./index')
,   plaintext = "SOL"
,   key_and_cipher = vernam.encrypt(plaintext)
,   key = key_and_cipher[0]
,   ciphertext = key_and_cipher[1]

console.log('plaintext--> ' + plaintext)
console.log('plaintext--> ' + vernam.binary(plaintext))

console.log('ciphertext--> ' + ciphertext)
console.log('ciphertext--> ' + vernam.binary(ciphertext))

console.log('key--> ' + key)
console.log('key--> ' + vernam.binary(key))

console.log(vernam.decrypt(key, ciphertext))
