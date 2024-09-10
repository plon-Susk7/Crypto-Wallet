import {Keypair} from '@solana/web3.js';
import { mnemonicToSeed } from 'bip39';
import {useState} from 'react';
import { HDKey } from "micro-ed25519-hdkey";

export const SolWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    let generateAdress = async () => {
        let seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/501'/${currentIndex}'/0'`;
        
        const hd = HDKey.fromMasterSeed(seed.toString('hex'));

        const keypair = Keypair.fromSeed(hd.derive(derivationPath).privateKey);
        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, keypair.publicKey.toBase58()]);
    }

    return (
        <div>
            <button onClick={generateAdress}>
                Generate Solana Address
            </button>
            {addresses.map(p => <div>
                Sol - {p}
            </div>)}
        </div>
    )
}