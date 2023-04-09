import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { CustomProvider } from "../Context";


function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <CustomProvider>
      <Container className="route-container">
        <ItemListContainer
          isCategoryRoute={isCategoryRoute}
          categoryId={params.id}
        />
      </Container>
    </CustomProvider>
  );
}

export default Root;

  // useEffect(() =>{

    //window.addEventListener("scroll", () => console.log("scrolling"));
    //return () =>
    //  window.removeEventListener("scroll", () => console.log("scrolling"));
    // }, []);

  //   const timer = setTimeout(() => setLoading(false), 100);

  //   return () => clearTimeout(timer);
  // }, [])
 
  // // console.log({ isCategoryRoute });

  // if (loading) {
  //   return <h2>TENES QUE ESPERAR</h2>
  // }

  // return (
  //   <div>
  //     {/* <NavBar /> */}
  //     {/* <ItemListContainer greeting={"Hello World"} /> */}
  //     <Container className='route-container'>
  //       <h2>ESTO</h2>
     {/* <h2>{loading ? "Loading" : "Loaded"}</h2> */}
      {/* </Container>
      <ItemListContainer isCategoryRoute={isCategoryRoute}
       categoryId={params.id}
       />

    </div>
  );
}


export default Root; */}
