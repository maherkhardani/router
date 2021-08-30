
import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList'
import Filter from './components/Filter';
import {  useState } from 'react';
import{router} from 'react-dom';


function useVisible(initialvalue=false){
  const [visibleF, setvisible]= useState(initialvalue)
  const changeValue = ()=> setvisible((v)=>!v);
  return [visibleF,changeValue]
}






const App=()=> {
  const[movies,setMovies]= useState([    {
      title:'B13',
      image:'https://m.media-amazon.com/images/I/51fVz8BPC3L._AC_.jpg',
      discription:'Action',
      posteURL:'https://youtu.be/Gzg9kuH_M0g',
      evaluation:' 10 novembre 2004 (France)',
    },
    {
      title:'Shootfighter',
      image:'https://m.media-amazon.com/images/M/MV5BMTI2MjYxNTUzMl5BMl5BanBnXkFtZTcwNTQyOTQyMQ@@._V1_.jpg',
      discription:'Action',
      posteURL:'https://youtu.be/IBUyCSKju9I',
      evaluation:'5 mai 1993', 
    },
    {
      title:'Coup de foudre au Plaza',
      image:'https://media.senscritique.com/media/000000107499/source_big/Coup_de_foudre_au_Plaza.jpg',
      discription:'romantic',
      posteURL:'https://youtu.be/012WdIK-bBI',
      evaluation:' 28 Dec 2008', 
    },
    {
      title:'Urs',
      image:'https://i.ytimg.com/vi/b0HzLYJla1M/maxresdefault.jpg',
      discription:'cartoon',
      posteURL:'https://youtu.be/b0HzLYJla1M',
      evaluation:' 12 Sept 2020', 
    },
]);
<router path="/" component={button}/>
  const [filterText,setfilterText]= useState('') ;  
  const moviesfilter = movies.filter(el=>el.title.includes(filterText));
  const [title,settitle]= useState('')
  const [description,setdescription]= useState('')
  const [posterURL,setposterURL]= useState('')
  const [rating,setrating]= useState('')
  console.log(title,description,posterURL,rating)
  const addMovie=() => {
    if((title==='')||(description==='')||(posterURL==='')||(rating===''))
    alert("merci de  bien remplisre le formulaire")
    else
    setmovies(movies.concat({title:title,description:description,posterURL:posterURL,rating:rating}));
}
   return ( 
    <div className="App">
   <Filter movies={movies} searchfonction={(e)=> {setfilterText(()=>e.target.value) }} />
   <div className="listMovies">
   <MoviesList movies={moviesfilter}  />
   <AddMovie settitle={(e)=>settitle(e.target.value)} setdescription={(e)=>setdescription(e.target.value)} setposterURL={(e)=>setposterURL(e.target.value)} setrating={(e)=>setrating(e.target.value)} addMovie={addMovie} />
   </div>
   <button variant="primary"  onClick={addMovie} > Ajouter</button>
   </div>
  );
}

export default App;