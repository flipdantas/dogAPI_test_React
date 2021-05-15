import { useCallback, useEffect, useState } from "react";

import api from '../../../services/api';
import LoaderContent from '../../../LoaderContent';

import { Container } from './style';

const App: React.FC = () => {
  const [ photo, setPhoto ] = useState<string>('');
  const [ isLoad, setIsLoad ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoad(true)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }, [])

  const handleSortImage: any = useCallback(() => {
    setIsLoad(true)
    console.log(photo)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }, [photo]) 

  return (
    <Container>
      <div className="content">
        <h1>Lista de cães VIP</h1>
        <h4>Veja aqui todos os cães convidados para a K-9 Fest</h4>
        <button onClick={handleSortImage}>Veja o Dog</button>
      </div>
      {isLoad? (<LoaderContent />) : (<img src={photo} alt='dog'/> )}
    </Container>
  );
}

export default App;
