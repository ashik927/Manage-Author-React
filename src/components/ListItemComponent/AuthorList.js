import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const AuthorList = ({authorList,setpageLoad}) => {

    const [load , setLoad] = useState(false)
    let location = useLocation();
    
    const addFavoriteAuthor = (definition) => {
      if (localStorage.getItem("favouriteAuthor") != null) {
          let favouriteAuthor = JSON.parse(localStorage.getItem("favouriteAuthor"));
            const newObj = {
              ...definition,
              serial: favouriteAuthor?.length + 1
            }
          let newItems = [...favouriteAuthor,newObj];        
          savefavouriteAuthortToSession(newItems)
          Swal.fire(
            'Thanks!',
            'Favourite Update Successfully',
            'success'
          )
      }else{
        let favouriteAuthorArray =[]
          const newObj = {
              ...definition,
              serial: 1
            }
          let addfavouriteAuthor = favouriteAuthorArray.push(newObj)
          Swal.fire(
            'Thanks!',
            'Favourite Update Successfully',
            'success'
          ) 
          savefavouriteAuthortToSession(favouriteAuthorArray)
      }
    }

    const deleteFavouriteAuthor = (newItems) => {
        let result = window.confirm("Do you want to delete your favourite?");
        if (result) {
            let favouriteAuthor = JSON.parse(localStorage.getItem("favouriteAuthor"));
            const filterItems = favouriteAuthor.filter(p => p._id !== newItems._id);
            savefavouriteAuthortToSession(filterItems);
            if(location.pathname == '/favouriteAuthor'){
            setpageLoad(true)
            }
        }
    }

    const savefavouriteAuthortToSession = (favouriteAuthor) => {
        if(favouriteAuthor.length===0){
            clearfavouriteAuthorFromSession();
        }else{
          localStorage.setItem("favouriteAuthor", JSON.stringify(favouriteAuthor));
            setLoad(true)
        }
    }

    const clearfavouriteAuthorFromSession = () => {
    localStorage.removeItem("favouriteAuthor");
    }
   
      useEffect(() => {
        setLoad(false)
      },[load])

    return (
        <Card>
        <CardBody>
            <CardTitle tag="h5">
               {authorList?.name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {authorList?.link}
            </CardSubtitle>
            <CardText>
                {authorList?.bio}
            </CardText>
            {
              location.pathname == '/author' ?
              JSON.parse(localStorage.getItem("favouriteAuthor")) && JSON.parse(localStorage.getItem("favouriteAuthor")).find(item => item?._id === authorList?._id) ? 
                <Button color="danger" onClick={() =>deleteFavouriteAuthor(authorList)}>
                    Remove Favourite Author
                </Button>
            :
            <Button color="primary" onClick={() =>addFavoriteAuthor(authorList)}>
                  Add Favourite Author
            </Button>
            :
            <Button color="danger" onClick={() =>deleteFavouriteAuthor(authorList)}>
                    Remove Favourite Author
                </Button>
            }
           
        </CardBody>
    </Card>
    );
};

export default AuthorList;