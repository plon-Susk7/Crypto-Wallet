import { useState } from 'react'
import { generateMnemonic } from 'bip39'
import { EthWallet } from './components/eth';
import { SolWallet } from './components/sol';



function App() {
  const [mnemonic, setMnemonic] = useState("");

  let genMnemonic = async () =>{
    let mnemonic = await generateMnemonic();
    console.log(mnemonic);
    setMnemonic(mnemonic);
  }

  return (
    <>
      <button onClick={genMnemonic}>Generate Mnemonic</button>
      <div>
        {mnemonic && <p>{mnemonic}</p>}
      </div>
      <EthWallet mnemonic={mnemonic} />
      <SolWallet mnemonic={mnemonic} />
      
    </>
  )
}

export default App
