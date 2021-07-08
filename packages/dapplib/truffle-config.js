require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remove concert good ensure swift suspect'; 
let testAccounts = [
"0x6a7d5803befceb10f5f2b57a77ee3f70613e1874f895328fb4382e95eb6e9573",
"0xf3d36be279c849152a3279942ce94c20515536962fed0fb4216ce20b196236d4",
"0x076dd6698cd27a74b62a29ac3571422520ff9fe94f3cf5033350b263f7773ed0",
"0x0f31d24b62298deed2c3bab7773bec1cb627367e9d9b3682affbb87940f5a189",
"0x85c5a2210355bcd823814be225cc8f59030685fec774214dc9f3d5be4e06f8ed",
"0xae59afecb27656d1bef70f2d45aa4c502dc9413be3b80a540eb7bc2041d1bf58",
"0x0fb542db7d02fb00e3f30cfffaf247cc6a26d1f288c0810704ccc876f2120764",
"0x17adf4ce73d9b933dd39959d1bd434184cd34c347362efd77d05e5b804dbb511",
"0x0034291abb56e67db4337dc6d2888f7e726d75993614b4cda10fb4af287e0fee",
"0xd1632b5b4e0c1a0eb91bbc0fc6d3131f228e1a3858ac9f059314c0f787ba9711"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


