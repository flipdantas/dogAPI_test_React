import loadGifImage from './img/loadgif.gif';

const LoaderContent: React.FC = () => {
  return(
  <div>
    <h1>Estagiário Astolfo buscando a imagem</h1>
    <img src={loadGifImage} alt="Dog Loader"/>
  </div>
  )
}

export default LoaderContent;