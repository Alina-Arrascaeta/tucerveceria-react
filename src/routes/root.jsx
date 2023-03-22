import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom';


function Root() {
  const params = useParams();
  const isCategoryRoute =  params.id;
 
  // console.log({ isCategoryRoute });

  return (
    <div>
      <NavBar />
      {/* <ItemListContainer greeting={"Hello World"} /> */}
      <ItemListContainer isCategoryRoute={isCategoryRoute}
       categoryId={params.id}
       />

    </div>
  );
}


export default Root;
