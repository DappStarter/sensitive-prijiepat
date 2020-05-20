require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net puppy include ensure olympic sleep'; 
let testAccounts = [
"0xcefd079a3f75b62593ee388c082d37d799ee7e596f24282b8437ab70e815fb19",
"0xd7c0d684814030362636df9c76af33514a9181e6ffbb7fca3723a17146703497",
"0x9c018a755accb672dbbfe8064747ea047e9bab1ed72046c1e84281cd33f0f42f",
"0x89115ea17a7eb626c6a96736f2ed4e84f815287ec744465dfa41785010292446",
"0xfb17da00c84ca4262c8cecfb63c360983a5a64a17d3ab6f57c056469b841414d",
"0x3f83a05eb51b5953e45cf654b918fc692fbbdbcf4b20eddbd5bf126485c1b749",
"0xb0366dcc49399ca0fba43849bc4f201ce870bde19e88ea79907ab630e38b0d43",
"0x35b8c6346754f4a1b6143274ba26cc56e5323c72a5f00ac4c781b05e428ddb86",
"0xde7ad14a8bd340df037aa5fb4d277eea33d9c8847a08c6c20778388902df3ccc",
"0xb6486f4f60604debc941980d62e27a2c25dd2d4650f6fbdfc301f3c2d163052a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
