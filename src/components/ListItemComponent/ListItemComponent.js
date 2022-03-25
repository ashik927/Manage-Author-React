import React,{useState , useEffect} from 'react';
import AuthorList from './AuthorList';
import ReactPaginate from 'react-paginate'
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';


const ListItemComponent = () => {
    const [authorList , setAuthorList] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);
    const [pageLoad, setpageLoad] = useState(false)
    const [Loading, setLoading] = useState(false)

    let location = useLocation();

    const fetchAuthorData = (offsetValue) =>{
        setActivePage(offsetValue)
        if(offsetValue==1){
            try{
                fetch(`https://api.quotable.io/authors?page=${offsetValue}&limit=${itemsPerPage}&skip=20`, {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setAuthorList(data) 
                        setPageCount(data.totalPages);  
                        setLoading(false)                     
                    }); 
            }catch(error){
                console.log(error);
            }
        }else{
            try{
                fetch(`https://api.quotable.io/authors?page=${offsetValue}&limit=${itemsPerPage}`, {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setAuthorList(data) 
                        setPageCount(data.totalPages);   
                        setLoading(false)                    
                    }); 
            }catch(error){
                console.log(error);
            }
        }
       
    }

    const fetchLocalHostFavouriteData = () => {
        setAuthorList(JSON.parse(localStorage.getItem("favouriteAuthor")) ?? [])
        setpageLoad(false) 
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        if(location.pathname == '/author') {
            fetchAuthorData(1)
        }else{
            fetchLocalHostFavouriteData()
        }
    }, [location.pathname , pageLoad])

    const handlePageClick = (event) => {
        setLoading(true)
        fetchAuthorData(event.selected);
      };
    
    return (
    <>
        {
            Loading ?
              <Loader/>
            :
            location.pathname == '/author' ?
            <>
                    {
                        authorList &&
                        authorList?.results?.length > 0  &&
                        authorList?.results.map((singleAuthor) => (
                            <AuthorList authorList={singleAuthor} setpageLoad={setpageLoad}></AuthorList>
                        ))
                    }
                {
                    console.log('activePage',activePage)
                }
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                    disableInitialCallback={false}
                    forcePage={activePage}
                />
            </>
           :
           authorList &&
           authorList?.length > 0  &&
           authorList.map((singleAuthor) => (
               <AuthorList authorList={singleAuthor} setpageLoad={setpageLoad} ></AuthorList>
          ))
        
        }

      
        
    </>
    );
};

export default ListItemComponent;