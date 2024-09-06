import { generateMnemonic, mnemonicToSeedSync } from "bip39";


export const Test = () => { 
    
    const mnemonic = generateMnemonic();


    console.log("Generated Mnemonic Phrase: ", mnemonic);

    const seed = mnemonicToSeedSync(mnemonic);

    console.log("Generated Seed: ", seed);
}