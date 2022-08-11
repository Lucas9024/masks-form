import React from 'react';
import  {useState, useCallback} from 'react'

import Input from './components/input';

interface Usuario {
  cep: string;
  price: number;
}

const App: React.FC = () => {

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario, 
      [e.currentTarget.name]: e.currentTarget.value
    })
  }, [usuario])

  return (

    <div>
      <Input
       placeholder="99999-999" 
       name='cep' 
       mask='cep' 
       onChange={handleChange} />


      <Input 
      placeholder='20,75' 
      name='price' 
      mask='currency' 
      onChange={handleChange} />


      <button onClick={() => console.log(usuario)}>Salvar</button>
    </div>
  )
}

export default App;
